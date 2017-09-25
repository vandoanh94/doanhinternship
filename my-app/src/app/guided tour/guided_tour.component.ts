import { Component } from '@angular/core';
import { Guide } from "./guide";
import { GUIDES } from "./mock-guides";


@Component({
  selector: 'guided-tour',
  templateUrl: './guided_tour.component.html',
  styleUrls: ['./guided_tour.component.css']
})
export class GuidedtourComponent {
  guides : Guide[];
  title = 'guided_tour';
  mdTitle = 'Welcome to Trend Monitor';
  mdBodyTitle = "";
  myEvent(event) {
    console.log(event);
  }
  onClickNext()
  {

  }
  onClickBack()
  {
    
  }
}
