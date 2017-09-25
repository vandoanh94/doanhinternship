import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnComponent } from "./learn/learn.component";
import { GuidedtourComponent } from "./guided tour/guided_tour.component";
import { AppComponent } from './app.component';


 
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '#',  component: AppComponent },
  { path: 'learn',  component: LearnComponent },
  { path: 'tour',  component: GuidedtourComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}