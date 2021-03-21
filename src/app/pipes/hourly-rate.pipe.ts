import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourlyRate'
})
export class HourlyRatePipe implements PipeTransform {

  transform(value: number, rate:number): number {
    return value / rate;
  }

}
