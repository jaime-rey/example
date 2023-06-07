import { Directive, HostBinding } from '@angular/core';
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'td',
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class PaCellColor {
  @HostBinding('class')
  bgClass = '';
  setColor(dark: boolean) {
    this.bgClass = dark ? 'table-dark' : '';
  }
}
