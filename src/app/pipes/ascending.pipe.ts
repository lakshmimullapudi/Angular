import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ascending'
})
export class AscendingPipe implements PipeTransform {

  transform(value:number[]): number[] {
    return value.sort(function(x,y){
      return x-y;
    });
  }

}
