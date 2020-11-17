import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { ICovid } from './interfaces/covid';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit {

  @Input() gloablCovid: ICovid;
  continentsCovid: ICovid;
  countryCovid: ICovid;

  countryCovidForm: FormGroup;

  apiError: HttpErrorResponse;
  showApiError: boolean;
  showContinentsReport: boolean;
  showCountryReport: boolean;

  covidRiskContinent: string = '';
  covidRiskCountry: string = '';

  continents = [
    {
      value: 'africa',
    },
    // {
    //   value: 'america',
    // },
    // {
    //   value: 'antarctica',
    // },
    {
      value: 'asia',
    },
    {
      value: 'europe',
    },
    // {
    //   value: 'oceania',
    // },
  ];

  allCountries = [];

  constructor(private appService: AppService, private fb: FormBuilder) {
    this.countryCovidForm = this.fb.group({
      inputCountry: ['', Validators.required]
    })
  }

  ngOnInit() {
    /*
    // LISTA DI COUNTRY NON COMPLETA, NELL'API MANCANO STATI COME ITALIA, SPAGNA ECC
    this.appService.getAllCountries().subscribe(
      res => {
        let temp = [];
        temp.push(res.data)
        for (let countryCodes of temp) {
          Object.keys(countryCodes).map(code => {
            let singleCode = res.data[code];
            this.allCountries.push(singleCode.country)
          })
        }
      },
      err => console.log(err)
    )*/
  }

  searchContinentCovid(event: any) {
    if (event.target.value !== 'select-option') {
      this.appService.getAllContinentCovid(event.target.value).subscribe(
        (res: ICovid) => {
          this.continentsCovid = res;
          this.showContinentsReport = true;
          this.showApiError = false;
          /* if (this.continentsCovid.criticalPerOneMillion < 3) {
            this.covidRiskContinent = 'low-risk';
          } else if (this.continentsCovid.criticalPerOneMillion >= 3 && this.continentsCovid.criticalPerOneMillion < 10) {
            this.covidRiskContinent = 'medium-risk';
          } else if (this.continentsCovid.criticalPerOneMillion >= 10) {
            this.covidRiskContinent = 'high-risk';
          }*/
        },
        (err: HttpErrorResponse) => {
          this.showContinentsReport = false;
          this.apiError = err;
          err.status === 404 ? this.showApiError = true : false;
        }
      );
    } else {
      this.showContinentsReport = false;
    }
  }

  searchCountryCovid() {
    if (this.countryCovidForm.get('inputCountry').value.length >= 3) {
      this.appService.getAllCountryCovid(this.countryCovidForm.get('inputCountry').value.toLowerCase()).subscribe(
        (res: ICovid) => {
          this.countryCovid = res;
          this.showCountryReport = true;
          this.showApiError = false;
          /*if (this.countryCovid.criticalPerOneMillion < 3) {
            this.covidRiskCountry = 'low-risk';
          } else if (this.countryCovid.criticalPerOneMillion >= 3 && this.countryCovid.criticalPerOneMillion < 10) {
            this.covidRiskCountry = 'medium-risk';
          } else if (this.countryCovid.criticalPerOneMillion >= 10) {
            this.covidRiskCountry = 'high-risk';
          }*/
        },
        (err: HttpErrorResponse) => {
          this.showCountryReport = false;
          this.apiError = err;
          err.status === 404 ? this.showApiError = true : false;
        }
      );
    } else {
      this.showContinentsReport = false;
    }
  }
}
