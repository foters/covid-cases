import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UserLoginBody {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl = 'https://disease.sh';
  allCovid: any;

  constructor(private http: HttpClient) { }
  getAllCovid(): Observable<any> {
    return this.http.get(this.baseUrl + '/v3/covid-19/all');
  }
}
