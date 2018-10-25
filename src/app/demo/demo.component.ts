import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
   num:string = "ang-demo";
   demo:number = 0;
  selected(){
  // let a = document.getElementById("nope");
  // a.innerHTML = "hello";
  console.log("hello");
  }
  //  x:number = 10;
  //  k = this.x+10;
  //  y:string = 'hii';
  //  z:boolean = false;
  //  a:string[] = ["helo","str"];
  //  b:[number,string] = [10,"helo"];
  constructor() { }
 
  ngOnInit() {
  
   
  //  let  c:Array<number> = [2,3,4,5];
  //  console.log(Array.isArray(c));
  //  let b:[string,number] = ["hi",10];
  //  console.log(b[0].substr(0));
  //  b[3] = "yes";
   
  //  b[2]=b[1].toString();
  //  console.log(b);
  //  console.log(typeof(b[2]));
  //  enum Color {Red, Green, Blue}
  //  let e: Color = Color.Green;
  //  console.log(e);
  //  let f:any = 4;
   
  //  let list: any[] = [1, true, "free"];

  //  list[1] = 100;
  //  console.log(list);
 
  //  this.warnUser();
   
  }
   

//    warnUser(): void {
//     console.log("This is my warning message");
// }
@Input() name:string;



}
