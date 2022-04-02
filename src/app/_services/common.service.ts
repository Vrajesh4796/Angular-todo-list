import { Injectable } from '@angular/core';
import { LocalService } from './local.service';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    constructor(private local : LocalService) { }

    get todoDetails() : any {
        return this.local.getJsonValue('todo-details') != null && this.local.getJsonValue('todo-details') != '' ? JSON.parse(this.local.getJsonValue('todo-details')) : [];
    }
}
