import { Component, OnInit } from '@angular/core';
import { PopupAskGuideService } from '@app/trendMonitor/popup-askguide/popup-askguide.service';


@Component({
  selector: 'popup-askguide',
  templateUrl: './popup-askguide.component.html',
  styleUrls: ['./popup-askguide.component.css']
})
export class PopupAskGuideComponent implements OnInit {
  constructor(private popupAskGuideService: PopupAskGuideService) {
  }
  ngOnInit() {
    if (this.popupAskGuideService.isShowPopup() == true) {
      document.getElementById("open-my-popup-ask-guide").click();
    }
  }
}
