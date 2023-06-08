import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';
import { PaCellColor } from './cellColor.directive';

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
  @ViewChildren(PaCellColor)
  viewChildren: QueryList<PaCellColor> | undefined;
  ngAfterViewInit() {
    this.viewChildren?.changes.subscribe(() => {
      this.updateViewChildren();
    });
    this.updateViewChildren();
  }
  private updateViewChildren() {
    setTimeout(() => {
      this.viewChildren?.forEach((child, index) => {
        child.setColor(index % 2 ? true : false);
      });
    }, 0);
  }
}
