import { Component } from '@angular/core';
import { EmpService } from '../sharedservices/empService';


@Component({
    selector: 'card-view',
    templateUrl: './cardview.component.html',
    styleUrls: ['./cardview.component.css']
})

export class CardView{

    empData: any[];

    constructor(private empService: EmpService){
        this.empData = this.empService.getAllData();
    }

}