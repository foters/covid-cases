import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export interface UserLoginBody {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAllCovid() {
    const url = 'https://disease.sh/v3/covid-19/all'; // Replace it with your own API path
    this.http.get(url).toPromise()
      .then((res: any) => {
        console.log('RES: ', res);
        // If you wish to return the body of response only
        return res.data;
      });
  }
}
