import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import {environment} from 'src/environments/environment';
import { cityData, countryData, stateData } from 'src/app/models/common.model';

const commonBaseUrl = environment.urls.common_base_api_url;

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  commonUrl: any;

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
    this.commonUrl = {
      countryList: commonBaseUrl + 'common/country-list',
      stateList: commonBaseUrl + 'common/state-list',
      cityList: commonBaseUrl + 'common/city-list',
    }
  
  }

  getAllCountries(): Observable<countryData[]> {
    const url = this.commonUrl.countryList;

    return this.http.get(url, this.requestOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError('Something went wrong!' + error);
      })
    );
  }

  getAllStates(): Observable<stateData[]> {
    const url = this.commonUrl.stateList;

    return this.http.get(url, this.requestOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError('Something went wrong!' + error);
      })
    );
  }

  getAllCities(): Observable<cityData[]> {
    const url = this.commonUrl.cityList;

    return this.http.get(url, this.requestOptions).pipe(
      map((data: any) => {
        return data;
      }), catchError(error => {
        return throwError('Something went wrong!' + error);
      })
    );
  }




}
