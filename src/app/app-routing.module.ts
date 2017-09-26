import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './components/demo/demo.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { Demo4Component } from './components/demo4/demo4.component';
import { Demo5Component } from './components/demo5/demo5.component';
const routes: Routes = [
  {
    path: 'demo', component: DemoComponent
  },
  {
    path: 'demo2', component: Demo2Component
  },
  {
    path: 'demo4', component: Demo4Component
  },
  {
    path: 'demo5', component: Demo5Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }