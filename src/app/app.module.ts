import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { CycleComponent } from './cycle/cycle.component';
import { PipesComponent } from './pipes/pipes.component';
import { AscendingPipe } from './pipes/ascending.pipe';
import { DescendingPipe } from './pipes/descending.pipe';
import { CalculatePipe } from './pipes/calculate.pipe';







@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    CycleComponent,
    PipesComponent,
    AscendingPipe,
    DescendingPipe,
    CalculatePipe,
    
  
    
 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
