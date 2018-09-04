import {Component} from '@angular/core';
import { EmpService } from './sharedservices/empService';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls:['./app.component.css']
})
export class AppComponent {
  title="Customer Management Portal!!!"

    constructor( private empService: EmpService ){
      
    };
};