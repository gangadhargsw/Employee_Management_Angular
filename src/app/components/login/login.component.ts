import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  submitted = false;
  toasterService: any;

  constructor(private formBuilder: FormBuilder,
              private http : HttpClient,
              private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        Username: ['', Validators.required],
        Password: ['', Validators.required],
      },
    );

  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }


  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  else{
    if(this.loginForm.value.Username === "test" && this.loginForm.value.Password === "test"){
      this.router.navigate(['/dashboard']);
      this.toasterService.error('Logged in successfully !!')
    }
  }
    
  }


}
