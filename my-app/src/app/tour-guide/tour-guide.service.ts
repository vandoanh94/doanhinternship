import { Injectable } from '@angular/core';
import { Guide } from "./guide";
import { GUIDES_EDIT } from '@app/trendMonitor/data/mock-guides-edit';
import { GUIDES } from '@app/trendMonitor/data/mock-guides';

@Injectable()
export class TourGuideService {
    public userLogin: boolean = true;
    constructor() {
    }
    public getAll(): any {
        return this.isUserLogin() ? GUIDES_EDIT : GUIDES;
    }
    public isUserLogin(): any {
        return this.userLogin ? true : false;
    }
}