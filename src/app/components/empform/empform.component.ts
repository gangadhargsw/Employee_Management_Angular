import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from './validation';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { CommonService } from '../../services/common.service';
import { cityData, countryData, stateData } from 'src/app/models/common.model';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeData } from 'src/app/models/employee.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrls: ['./empform.component.css']
})
export class EmpformComponent implements OnInit {
  employeeForm !: FormGroup;
  submitted = false;
  countryList : countryData[] = [];
  stateList : stateData[] = [];
  cityList : cityData[] = [];
  employeeData : EmployeeData[] = [];



  constructor(private formBuilder: FormBuilder, private http : HttpClient,
               private _commonService : CommonService,
               private _employeeService : EmployeeService,
               private toasterService : ToastrService,
               private router: Router) { }

  ngOnInit(): void {
    this.getCountries();
    // this.getStates();


    this.employeeForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['',Validators.required],
        id: ['',Validators.required],
        email: ['', [Validators.required, Validators.email]],
        age: ['',Validators.required],
        mob: ['',Validators.required],
        dob: ['',Validators.required],
        doj: ['',Validators.required],
        department: ['',Validators.required],
        gender: ['',Validators.required],
        country: ['',Validators.required],
        state: ['',Validators.required],
        city: ['',Validators.required],
        password: ['',
          [
            Validators.required,
          ],
        ],
        confirmPassword: ['', Validators.required]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    let formData = this.employeeForm.value;
    let dob = formData.dob.split('-').join('/');
    let modifiedData = {...formData,dob};
    if (this.employeeForm.invalid) {
      return;
    }
    this._employeeService.createEmployee(modifiedData).subscribe((res)=>{
      this.employeeData = res;
      this.router.navigate(['']);
      this.toasterService.success('Employee Created Successfully !!')
      console.log(this.employeeData);
    }, (err)=>{
      console.log(err)
      this.toasterService.error('Employee not Created ')
    });
  
    
  }

  onReset(): void {
    this.submitted = false;
    this.employeeForm.reset();
  }

  getCountries() {
    this._commonService.getAllCountries().subscribe(
      (data) => {
        this.countryList = data;
        console.log(this.countryList)
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getStates(val : any) {
    let isocode = val.target.value;
    this._commonService.getAllStates().subscribe(
      (data) => {
        this.stateList = data.filter((a)=> a.countryCode === isocode);
        // this.stateList.filter((a)=> a.isoCode === isocode)
        console.log(this.stateList)
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCities(val : any) {
    let isocode = val.target.value;
    let countrycode = this.stateList.filter((value)=> value.isoCode == isocode);
    this._commonService.getAllCities().subscribe(
      (data) => {
        this.cityList = data.filter((a)=> 
           a.stateCode === isocode && a.countryCode === countrycode[0].countryCode);
        console.log(this.cityList)
      },
      (err) => {
        console.log(err);
      }
    );
  }


}
