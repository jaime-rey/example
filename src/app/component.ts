import { Component } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';
import { NgModel, ValidationErrors } from '@angular/forms';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app',
  templateUrl: 'template.html',
})
export class ProductComponent {
  model: Model = new Model();
  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }
  getProducts(): Product[] {
    return this.model.getProducts();
  }
  newProduct: Product = new Product();
  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }
  addProduct(p: Product) {
    console.log('New Product: ' + this.jsonProduct);
  }
  getMessages(errs: ValidationErrors | null, name: string): string[] {
    const messages: string[] = [];
    for (const errorName in errs) {
      switch (errorName) {
        case 'required':
          messages.push(`You must enter a ${name}`);
          break;
        case 'minlength':
          messages.push(`A ${name} must be at least
              ${errs['minlength'].requiredLength}
              characters`);
          break;
        case 'pattern':
          messages.push(`The ${name} contains
              illegal characters`);
          break;
      }
    }
    return messages;
  }
  getValidationMessages(state: NgModel, thingName?: string) {
    const thing: string = state.path?.[0] ?? thingName;
    return this.getMessages(state.errors, thing);
  }
}
