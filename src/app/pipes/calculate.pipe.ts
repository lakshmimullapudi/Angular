import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculate'
})
export class CalculatePipe implements PipeTransform {

  transform(value:number): any {
    if(value>1000){
     let b = `${value} is Higher than 1000`;
     return b;
   }
   else{
     return `${value} is lower than 1000`;
   }
   
 }

}
