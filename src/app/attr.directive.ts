import { Directive, ElementRef, Input } from '@angular/core';
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[pa-attr]',
})
export class PaAttrDirective {
  constructor(private element: ElementRef) {}
  @Input('pa-attr')
  bgClass: string | null = '';
  ngOnInit() {
    this.element.nativeElement.classList.add(
      this.bgClass ?? 'table-success',
      'fw-bold'
    );
  }
}
