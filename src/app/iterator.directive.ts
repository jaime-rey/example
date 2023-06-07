import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input,
  IterableDiffer,
  IterableDiffers,
  ChangeDetectorRef,
  IterableChangeRecord,
  ViewRef,
} from '@angular/core';
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[paForOf]',
})
export class PaIteratorDirective {
  private differ: IterableDiffer<any> | undefined;

  private views: Map<any, PaIteratorContext> = new Map<
    any,
    PaIteratorContext
  >();
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<unknown>,
    private differs: IterableDiffers
  ) {}
  @Input('paForOf')
  dataSource: any;
  ngOnInit() {
    this.differ = <IterableDiffer<any>>(
      this.differs.find(this.dataSource).create()
    );
  }
  ngDoCheck() {
    const changes = this.differ?.diff(this.dataSource);
    if (changes != null) {
      const arr: IterableChangeRecord<any>[] = [];
      changes.forEachAddedItem((addition) => arr.push(addition));
      arr.forEach((addition) => {
        if (addition.currentIndex != null) {
          const context = new PaIteratorContext(
            addition.item,
            addition.currentIndex,
            arr.length
          );
          context.view = this.container.createEmbeddedView(
            this.template,
            context
          );
          this.views.set(addition.trackById, context);
        }
      });
      let removals = false;
      changes.forEachRemovedItem((removal) => {
        removals = true;
        const context = this.views.get(removal.trackById);
        if (context != null && context.view != null) {
          this.container.remove(this.container.indexOf(context.view));
          this.views.delete(removal.trackById);
        }
      });
      if (removals) {
        let index = 0;
        this.views.forEach((context) =>
          context.setData(index++, this.views.size)
        );
      }
    }
  }
}
class PaIteratorContext {
  index = 0;
  odd = false;
  even = false;
  first = false;
  last = false;
  view: ViewRef | undefined;
  constructor(public $implicit: any, public position: number, total: number) {
    this.setData(position, total);
  }
  setData(index: number, total: number) {
    this.index = index;
    this.odd = index % 2 == 1;
    this.even = !this.odd;
    this.first = index == 0;
    this.last = index == total - 1;
  }
}
