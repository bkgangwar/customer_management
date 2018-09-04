import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmpService } from '../sharedservices/empService';

@Component({
    selector: 'emp-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})

export class DetailComponent {

    empId: string;

    empData: any;

    title: string = "Thought Disrupt"

    constructor(private route: ActivatedRoute, private empService: EmpService) {
        this.empId = route.snapshot.params['id'];
        this.empData = this.empService.getEmpData(this.empId);
    }

    updateProfileData() {

        this.route.queryParams.forEach((params: Params) => {
            this.empData.FirstName = params['FirstName'];
            this.empData.LastName = params['LastName'];
            this.empData.Email = params['Email'];
            this.empData.PhoneNumber = params['PhoneNumber'];
            // console.log(this.route.snapshot.queryParams['FirstName']);
            // console.log(this.route.snapshot.queryParams['LastName']);
            // console.log(this.route.snapshot.queryParams['Email']);
            // console.log(this.route.snapshot.queryParams['PhoneNumber']);
        });
        // console.log(this.empData);
        // alert(this.empData);
    }
}