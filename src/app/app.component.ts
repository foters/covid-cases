import { Component, NgZone, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'covid-cases';

  covid: any;

  constructor(private appService: AppService, private ngZone: NgZone) { }

  ngOnInit() {
    this.appService.getAllCovid().subscribe(
      async (res) => {
        // debugger;
        console.log(res);
        this.ngZone.run(() => {
          this.covid = res;
        })
      },
      async (error) => {
        console.log(error);
      }
    )
    console.log('COVIDDI: ', this.covid);
  }


}
