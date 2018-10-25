import { Component, OnInit,OnChanges,OnDestroy,DoCheck,AfterContentChecked,AfterContentInit,AfterViewInit,AfterViewChecked, Input} from '@angular/core';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent implements OnInit,OnChanges,OnDestroy,AfterContentChecked,DoCheck,AfterContentInit,AfterViewChecked,AfterViewInit {

  constructor() { 
    console.log("constructor");
  }
  title:string;
  ngOnInit() {
console.log("OnInit");
  }
  ngOnChanges(){
    console.log("Onchanges");
  }
  ngOnDestroy() {
    console.log("OnDestroy");
  }
  ngDoCheck() {
    console.log("DoCheck");
  }
  ngAfterContentChecked() {
    console.log("AfterContentChecked");
  }
  ngAfterContentInit() {
    console.log("AfterContentInit");
  }
  ngAfterViewChecked() {
    console.log("AfterViewChecked");
  }
  ngAfterViewInit() {
    console.log("AfterViewInit");
  }


}
