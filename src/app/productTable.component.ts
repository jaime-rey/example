import { Component, Input } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'paProductTable',
  templateUrl: 'productTable.component.html',
})
export class ProductTableComponent {
  constructor(private dataModel: Model) {}

  getProduct(key: number): Product | undefined {
    return this.dataModel?.getProduct(key);
  }
  getProducts(): Product[] | undefined {
    return this.dataModel?.getProducts();
  }
  deleteProduct(key: number) {
    this.dataModel?.deleteProduct(key);
  }
  showTable = true;
  taxRate = 0;
  categoryFilter: string | undefined;
  itemCount = 3;
}
