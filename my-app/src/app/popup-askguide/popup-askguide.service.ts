import { Injectable } from '@angular/core';

@Injectable()
export class PopupAskGuideService {
    public isFirstTimeLogin: boolean = true;
    public isAfterAMonthLogin: boolean = false;
    constructor() {
    }
    public isShowPopup(): any {
        return (this.isFirstTimeLogin || this.isAfterAMonthLogin) ? true : false;
    }
}