import { Component, OnInit } from '@angular/core';
import { Guide } from "./guide";
import { TourGuideService } from '@app/trendMonitor/tour-guide/tour-guide.service';

@Component({
  selector: 'tour-guide',
  templateUrl: './tour-guide.component.html',
  styleUrls: ['./tour-guide.component.css']
})
export class TourGuideComponent implements OnInit {
  index = 0;
  guides: Guide[] = this.tourGuideService.getAll();
  currentGuide = this.guides[0];
  constructor(private tourGuideService: TourGuideService) {
  }
  ngOnInit() {
    this.getAll();
  }
  getAll(): void {
    this.guides = this.tourGuideService.getAll();
  } 
  onClickNext(id) {
    this.index = id + 1;
    this.currentGuide = this.guides[this.index];
  }
  onSelectGuide(id) {
    this.index = id;
    this.currentGuide = this.guides[this.index];
  }
  onClickPrevious(id) {
    this.index = id - 1;
    this.currentGuide = this.guides[this.index];
  }
}
