import {
  Directive,
  SimpleChanges,
  ViewContainerRef,
  TemplateRef,
  Input,
} from '@angular/core';
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[paIf]',
})
export class PaStructureDirective {
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<object>
  ) {}
  @Input('paIf')
  expressionResult: boolean | undefined;
  ngOnChanges(changes: SimpleChanges) {
    const change = changes['expressionResult'];
    if (!change.isFirstChange() && !change.currentValue) {
      this.container.clear();
    } else if (change.currentValue) {
      this.container.createEmbeddedView(this.template);
    }
  }
}
