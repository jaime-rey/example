import { Component } from '@angular/core';
import { Model } from './repository.model';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app',
  templateUrl: 'template.html',
})
export class ProductComponent {
  model: Model = new Model();
  getClasses(key: number): string {
    const product = this.model.getProduct(key);
    return 'p-2 ' + ((product?.price ?? 0) < 50 ? 'bg-info' : 'bg-warning');
  }
  // getClassMap(key: number): Object {
  // let product = this.model.getProduct(key);
  // return {
  // "text-center bg-danger": product?.name == "Kayak",
  // "bg-info": (product?.price ?? 0) < 50
  // };
  // }
  // fontSizeWithUnits: string = "30px";
  // fontSizeWithoutUnits: string= "30";
  getStyles(key: number) {
    const product = this.model.getProduct(key);
    return {
      fontSize: key < 2 ? '30px' : '60px',
      'margin.px': 100,
      color: (product?.price ?? 0) > 50 ? 'red' : 'green',
    };
  }
}
