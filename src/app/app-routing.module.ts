import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AngularComponentComponent} from "./angular-component/angular-component.component";
import {AngularjsWrapperComponentComponent} from "./angularjs-wrapper-component/angularjs-wrapper-component.component";

// two routes are defined here
// 1. /angular-component
// 2. /angularjs-wrapper-component
const routes: Routes = [
  { path: 'ng', component: AngularComponentComponent },
  { path: 'ng1', component: AngularjsWrapperComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
