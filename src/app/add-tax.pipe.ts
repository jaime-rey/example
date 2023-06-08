import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addTax',
})
export class AddTaxPipe implements PipeTransform {
  defaultRate = 10;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(value: any, rate?: any): number {
    const valueNumber = Number.parseFloat(value);
    const rateNumber =
      rate == undefined ? this.defaultRate : Number.parseInt(rate);
    return valueNumber + valueNumber * (rateNumber / 100);
  }
}
