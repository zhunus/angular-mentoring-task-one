import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceStrict } from 'date-fns';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {
    return formatDistanceStrict(0, value);
  }

}
