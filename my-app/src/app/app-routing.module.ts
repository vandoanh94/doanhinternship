import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnComponent } from "./learn/learn.component";
import { GuidedtourComponent } from "./guided tour/guided_tour.component";


 
const routes: Routes = [
  { path: '', redirectTo: '/learn', pathMatch: 'full' },
  { path: 'learn',  component: LearnComponent },
  { path: 'tour',  component: GuidedtourComponent }
//   ,
//   { path: 'detail/:id', component: HeroDetailComponent },
//   { path: 'heroes',     component: HeroesComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}