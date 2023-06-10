import { Component } from '@angular/core';
import { DiscountService } from './discount.service';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'paDiscountEditor',
  template: `<div class="form-group">
    <label [htmlFor]="">Discount</label>
    <input
      [(ngModel)]="discounter.discount"
      class="form-control"
      type="number"
    />
  </div>`,
})
export class PaDiscountEditorComponent {
  constructor(public discounter: DiscountService) {}
}
