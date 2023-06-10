/* eslint-disable @angular-eslint/no-input-rename */
import { Component } from '@angular/core';
import { DiscountService } from './discount.service';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'paDiscountDisplay',
  template: `<div class="bg-info text-white p-2 my-2">
    The discount is {{ discounter.discount }}
  </div>`,
})
export class PaDiscountDisplayComponent {
  constructor(public discounter: DiscountService) {}
}
