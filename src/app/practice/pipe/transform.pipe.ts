import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformData'
})
export class TransformPipe implements PipeTransform {

  transform(value: any, tr): any {
    if ((typeof value) === 'string') {
      return 'Hello' + ' ' + value.toUpperCase();
    } else if ((typeof value) === 'number') {
      return value = '$' + value / 73.34 + ' /-';
    } else if ((typeof value) === null || (typeof value) === undefined) {
      return 'Please enter Your salary';
    }
  }

}
