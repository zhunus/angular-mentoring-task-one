import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(value: any[], field: string, direction = 'desc'): any {
    if (direction === 'asc') {
      return value.sort((a, b) => a[field] - b[field]);
    }
    return value.sort((a, b) => b[field] - a[field]);
  }
}
