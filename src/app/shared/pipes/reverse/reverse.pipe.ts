import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hgwReverse',
})
export class ReversePipe implements PipeTransform {
  transform(value?: unknown[]): any {
    return value?.slice().reverse();
  }
}
