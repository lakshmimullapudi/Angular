import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  
  
})
export class PipesComponent implements OnInit {

 asc:number[] = [1,2,3,56,23,45,6];
loworhigh:number=0;
 click(demo){
   console.log(demo);
  this.loworhigh=demo;
 }


  constructor() { }

  ngOnInit() {
  }
//for date pipe
datePipe = new Date();

//for json pipe
ob:object= {name:"sravya", id:"490"};

//for currency pipe
x:number = 20.98;

//for percentage pipe
y:number = 20.98;


//for async pipe
pro : Promise <string> = null;
asyn() {
  console.log(this.pro);
  this.pro = new Promise<string>((resolve, reject) => {
    setTimeout(function () {
      resolve("resolved");
    },5000);
  });
}



}

