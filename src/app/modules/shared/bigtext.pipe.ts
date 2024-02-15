import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bigtext'
})
export class BigtextPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
