import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: number): string {
    if(value <= 999) return '' + value;

    let digits: Array<string> = ('' + value).split('');
    
    let offset = digits.length % 3;
    let i = offset !== 0 ? offset : 3; 
    
    for(; i <= digits.length - 3; i +=4)
      digits.splice(i, 0, ',');

    return digits.join('');
  }

}
