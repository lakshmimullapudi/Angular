import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descending'
})
export class DescendingPipe implements PipeTransform {

  transform(value:number[]): number[] {
    return value.sort(function(x,y){
      return y-x;
    });
  }

}
