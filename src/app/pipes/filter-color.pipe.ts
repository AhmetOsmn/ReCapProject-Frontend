import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color/color';

@Pipe({
  name: 'filterColor',
})
export class FilterColorPipe implements PipeTransform {
  transform(value: Color[], filterText: string): Color[] {

    filterText = filterText ? filterText.toLocaleLowerCase() : '';

    return filterText
      ? value.filter(
          (color: Color) =>
            color.name.toLocaleLowerCase().indexOf(filterText.toString()) !== -1
        )
      : value;
  }
}
