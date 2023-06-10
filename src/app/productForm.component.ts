import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from './product.model';

import { Model } from './repository.model';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'pa-productform',
  templateUrl: 'productForm.component.html',
})
export class ProductFormComponent {
  newProduct: Product = new Product();
  constructor(private model: Model) {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  submitForm(form: any) {
    this.model.saveProduct(this.newProduct);
    this.newProduct = new Product();
    form.resetForm();
  }
}
