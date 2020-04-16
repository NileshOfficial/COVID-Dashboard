import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: number, format: string = "csv", precision: number = 0): string {
    switch (format) {
      case "k": return this.k(value);
      case "setPrecision": return this.setPrecision(value, precision);
      default: return this.csv(value);
    }
  }

  csv(num: number): string {
    if (num >= -999 && num <= 999) return '' + num;

    let sign = ''; 
    if(num < 0) {
      sign = '-'; 
      num *= -1;
    }

    let digits: Array<string> = ('' + num).split('');

    let offset = digits.length % 3;
    let i = offset !== 0 ? offset : 3;

    for (; i <= digits.length - 3; i += 4)
      digits.splice(i, 0, ',');

    return sign + digits.join('');
  }

  k(num: number): string {
    if(num > -1000 && num < 1000) return "" + num;
    let kCount =  Math.round(num / 1000);
    return this.csv(kCount) + 'k';
  }

  setPrecision(num: number, precision: number): string {
    let precisionOffset = Math.pow(10, precision);
    let preciseNumber = Math.round(num * precisionOffset) / precisionOffset;
    return preciseNumber.toString();
  }
}
