import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule }   from '@angular/router';
import { LearnComponent } from "./learn/learn.component";
import { AppRoutingModule } from "./app-routing.module";
import { GuidedtourComponent } from "./guided tour/guided_tour.component";

@NgModule({
  declarations: [
    AppComponent,
    LearnComponent,
    GuidedtourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
