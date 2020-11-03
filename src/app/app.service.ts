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

  allCovid: any;

  constructor(private http: HttpClient) { }
  getAllCovid(): Observable<any> {
    const url = 'https://disease.sh/v3/covid-19/all';
    return this.http.get(url);
  }
}
