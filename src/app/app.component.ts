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
    this.getData();
    setInterval(() => this.getData(), 600000)
  }

  getData() {
    this.appService.getAllCovid().subscribe(
      (res) => this.covid = res,
      (error) => console.log(error)
    )
  }


}
