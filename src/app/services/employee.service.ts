import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployeeData } from 'src/app/models/employee.model';

const commonBaseUrl = environment.urls.common_base_api_url;



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeUrl: any;

  httpOptions = {
    header: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  requestOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }),
  };


  constructor(private http : HttpClient) { 
    this.employeeUrl = {
      employeeDetails : commonBaseUrl + 'empManage/employee'
    }
  }

  createEmployee(employeeData: any): Observable<EmployeeData[]> {
    // console.log('i am in service', employeeData);

    return this.http.post(this.employeeUrl.employeeDetails, employeeData, this.requestOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError(error + 'Something went wrong!');
      })
    );
  }
}
