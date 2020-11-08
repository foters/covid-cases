import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { ICovid } from './covid/interfaces/covid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  covid: ICovid;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getData();
    setInterval(() => this.getData(), 600000)
  }

  getData() {
    this.appService.getAllCovid().subscribe(
      (res) => this.covid = res,
      (err) => console.info(err)
    )
  }

}
