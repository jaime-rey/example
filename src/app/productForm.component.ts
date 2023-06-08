import {
  Component,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { Product } from './product.model';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'pa-productform',
  templateUrl: 'productForm.component.html',

  styleUrls: ['productForm.component.css'],

  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ProductFormComponent {
  newProduct: Product = new Product();
  // eslint-disable-next-line @angular-eslint/no-output-rename
  @Output('paNewProduct')
  newProductEvent = new EventEmitter<Product>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  submitForm(form: any) {
    this.newProductEvent.emit(this.newProduct);
    this.newProduct = new Product();
    form.resetForm();
  }
}
