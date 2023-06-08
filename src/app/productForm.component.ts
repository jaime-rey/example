import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from './product.model';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'pa-product-form',
  templateUrl: 'productForm.component.html',
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