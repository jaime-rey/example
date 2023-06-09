import { Product } from './product.model';
import { SimpleDataSource } from './datasource.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Model {
  private products: Product[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private locator = (p: Product, id: number | any) => p.id == id;

  constructor(private dataSource: SimpleDataSource) {
    this.products = new Array<Product>();

    this.dataSource.getData().forEach((p) => this.products.push(p));
  }
  getProducts(): Product[] {
    return this.products;
  }
  getProduct(id: number): Product | undefined {
    return this.products.find((p) => this.locator(p, id));
  }
  saveProduct(product: Product) {
    if (product.id == 0 || product.id == null) {
      product.id = this.generateID();
      this.products.push(product);
    } else {
      const index = this.products.findIndex((p) => this.locator(p, product.id));
      this.products.splice(index, 1, product);
    }
  }
  deleteProduct(id: number) {
    const index = this.products.findIndex((p) => this.locator(p, id));
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }
  private generateID(): number {
    let candidate = 100;
    while (this.getProduct(candidate) != null) {
      candidate++;
    }
    return candidate;
  }
}
