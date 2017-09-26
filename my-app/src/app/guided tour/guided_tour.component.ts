import { Component, OnInit } from '@angular/core';
import { Guide } from "./guide";
import { GUIDES } from "./mock-guides";
import { GUIDES_EDIT } from './mock-guides-edit';


@Component({
  selector: 'guided-tour',
  templateUrl: './guided_tour.component.html',
  styleUrls: ['./guided_tour.component.css']
})
export class GuidedtourComponent implements OnInit {
  ngOnInit() {
    if (this.testUser) { 
      this.guides = GUIDES_EDIT;
    }
  }
  public testUser: boolean = true;

  mdTitle = 'Welcome to Trend Monitor';
  guides: Guide[] = GUIDES;
  guideSelect = this.guides[0];
  guideButtonSelect = this.guideSelect.title;
  i = 0;

  onSelect(idGuide) {
    this.i = idGuide;
    this.guideSelect = this.guides[idGuide];
    this.guideButtonSelect = this.guideSelect.title;
    if (idGuide > 0) {
      this.mdTitle = "The Tour Guide";
    }
    else {
      this.mdTitle = "Welcome to Trend Monitor";
    }
  }
  onClickNext() {
    let ii;
    if (this.i < this.guides.length - 1) {
      this.i++;
      ii = this.i;
      this.guideSelect = this.guides[ii];
      this.guideButtonSelect = this.guideSelect.title;
    }
    if (ii > 0) {
      this.mdTitle = "The Tour Guide";
    }
  }
  onClickPrevious() {
    let ii;
    if (this.i > 0) {
      this.i--;
      ii = this.i;
      this.guideSelect = this.guides[ii];
      this.guideButtonSelect = this.guideSelect.title;
    }
    if (ii > 0) {
      this.mdTitle = "The Tour Guide";
    }
    else {
      this.mdTitle = "Welcome to Trend Monitor";
    }
  }
}
