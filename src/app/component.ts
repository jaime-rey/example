import { Component } from '@angular/core';
import { Model } from './repository.model';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app',
  templateUrl: 'template.html',
})
export class ProductComponent {
  model: Model = new Model();
}
