import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idscurrency'
})
export class IdsCurrencyPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (!value) return 'S/ 0.00';
    else return 'S/ ' + value;
  }

}
