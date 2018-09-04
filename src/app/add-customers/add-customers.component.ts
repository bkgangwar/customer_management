import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EmpService } from '../sharedservices/empService';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css'],
  providers:[FormBuilder]
})
export class AddCustomersComponent implements OnInit {
  form: FormGroup;
  private formSumitAttempt: boolean;
  
  constructor(private formBuilder: FormBuilder,
    private empService: EmpService) { }

    ngOnInit() {
      this.form = this.formBuilder.group({
        FirstName: [null, Validators.required],
        LastName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        PhoneNumber: [null, Validators.required],
        CompanyName: [null, Validators.required],
        ExpInYears: [null, Validators.required],
        Designation: [null, Validators.required],
        DOJ: [null, Validators.required],
      });
    }
  
    isFieldValid(field: string) {
      return (
        (!this.form.get(field).valid && this.form.get(field).touched) ||
        (this.form.get(field).untouched && this.formSumitAttempt)
      );
    }
  
    displayFieldCss(field: string) {
      return {
        'has-error': this.isFieldValid(field),
        'has-feedback': this.isFieldValid(field)
      };
    }
  
    onSubmit() {
      this.formSumitAttempt = true;
      if (this.form.valid) {
        console.log('form submitted');
      }
    }
  
    reset() {
      this.form.reset();
      this.formSumitAttempt = false;
    }
}
