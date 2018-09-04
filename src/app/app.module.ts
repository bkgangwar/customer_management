import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DetailComponent } from './detailpage/detail.component';

import { EmpService } from './sharedservices/empService';
import { MainPage } from './mainPage/mainpage.component';
import { CardView } from './cardView/cardview.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { FormErrorComponent } from './form-error/form-error.component';



const appRoutes: Routes = [
  { path: 'customer/:id', component: DetailComponent },
  { path: '', component: MainPage },
  { path: 'submitFlag', component: AddCustomersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    MainPage,
    CardView,
    AddCustomersComponent,
    FormErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [EmpService],
  bootstrap: [AppComponent, DetailComponent, MainPage]
})
export class AppModule { }
