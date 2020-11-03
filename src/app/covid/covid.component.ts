import { IfStmt } from '@angular/compiler';
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

  apiError: Object;
  showApiError: boolean;
  showContinentsReport: boolean;

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
    if (event.target.value !== '') {
      this.appService.getAllContinentCovid(event.target.value).subscribe(
        (res) => {
          this.continentsCovid = res;
          this.showContinentsReport = true;
          this.showApiError = false;
        },
        (err) => {
          console.log(typeof err);

          this.showContinentsReport = false;
          this.apiError = err;
          err.status === 404 ? this.showApiError = true : false;
        }
      );
    } else {
      this.showContinentsReport = false;
    }
  }



}
