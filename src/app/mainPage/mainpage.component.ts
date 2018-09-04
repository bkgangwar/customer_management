import { Component } from '@angular/core';
import { EmpService } from '../sharedservices/empService';


@Component({
    selector: 'main-page',
    templateUrl: 'mainpage.component.html',
    styleUrls: ['./mainpage.component.css']
})

export class MainPage{
    seeListCardView="Click on a button to choose list view or Card view.";
    empData: any[];

    constructor(private empService: EmpService){
        this.empData = this.empService.getAllData();
    }

    addCustomers(){
        console.log("bhoodev ggg");
    }

}