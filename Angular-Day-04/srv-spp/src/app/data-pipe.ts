import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data',
  standalone: false,
})
export class DataPipe implements PipeTransform {
  transform(dataSize: number,dataType: string='HB'): unknown {
    return (dataSize / 1024).toFixed(2) + ' ' + dataType;
  }
}
