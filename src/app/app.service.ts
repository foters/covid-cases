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

  constructor(private http: HttpClient) { }
  getAllCovid(): Observable<any> {
    return this.http.get(this.baseUrl + '/v3/covid-19/all');
  }

  getAllContinentCovid(continent: string): Observable<any> {
    return this.http.get(this.baseUrl + '/v3/covid-19/continents/' + continent);
  }

  getAllCountryCovid(country: string): Observable<any> {
    return this.http.get(this.baseUrl + '/v3/covid-19/countries/' + country);
  }

  getAllCountries(): Observable<any> {
    return this.http.get('https://api.first.org/data/v1/countries');
  }
}
