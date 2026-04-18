import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cube',
  standalone: false,
})
export class CubePipe implements PipeTransform {
  transform(num1: number): number {
    return num1 * num1 * num1;
  }
}
