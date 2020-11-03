import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit {

  @Input() covid: any;
  continentsCovid: any;
  countryCovid: any;

  apiError: any;
  showApiError: boolean;
  showContinentsReport: boolean;
  showCountryReport: boolean;

  continents = [
    {
      value: 'africa',
    },
    {
      value: 'america',
    },
    {
      value: 'antarctica',
    },
    {
      value: 'asia',
    },
    {
      value: 'europe',
    },
    {
      value: 'oceania',
    },
  ];

  constructor(private appService: AppService) { }
  ngOnInit() {
  }

  searchContinentCovid(event: any) {
    if (event.target.value !== 'select-option') {
      this.appService.getAllContinentCovid(event.target.value).subscribe(
        (res) => {
          this.continentsCovid = res;
          this.showContinentsReport = true;
          this.showApiError = false;
        },
        (err) => {
          this.showContinentsReport = false;
          this.apiError = err;
          err.status === 404 ? this.showApiError = true : false;
        }
      );
    } else {
      this.showContinentsReport = false;
    }
  }

  searchCountryCovid(event: any) {
    if (event.target.value !== '') {
      this.appService.getAllCountryCovid(event.target.value).subscribe(
        (res) => {
          this.countryCovid = res;
          this.showCountryReport = true;
          this.showApiError = false;
        },
        (err) => {
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
