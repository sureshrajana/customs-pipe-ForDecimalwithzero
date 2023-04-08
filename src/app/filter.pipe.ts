import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addzero'
})
export class FilterPipe implements PipeTransform {

  transform(value: any): any {
    if (typeof value !== 'number') {
      return value;
    }

    if (Number.isInteger(value)) {
      return value.toFixed(6);
    }

    return value;
  }

}
