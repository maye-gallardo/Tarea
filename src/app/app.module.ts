import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarraComponent } from './barra/barra.component';
import { DemoComponent } from './components/demo/demo.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { Demo3Component } from './componets/demo3/demo3.component';
import { Demo4Component } from './components/demo4/demo4.component';
import { Demo5Component } from './components/demo5/demo5.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    DemoComponent,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
