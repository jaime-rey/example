import { Component, Input } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';
import { Subject } from 'rxjs';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'paProductTable',
  templateUrl: 'productTable.component.html',
})
export class ProductTableComponent {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('model')
  dataModel: Model | undefined;

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
  selectMap = {
    Watersports: 'stay dry',
    Soccer: 'score goals',
    other: 'have fun',
  };
  numberMap = {
    '=1': 'one product',
    '=2': 'two products',
    other: '# products',
  };
  numbers: Subject<number> = new Subject<number>();
  ngOnInit() {
    let counter = 100;
    setInterval(() => {
      this.numbers.next((counter += 10));
    }, 1000);
  }
}
