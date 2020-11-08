import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { ICovid } from './covid/interfaces/covid';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  covid: ICovid;


  constructor(private appService: AppService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.getData();
    setInterval(() => this.getData(), 600000)
  }

  getData() {
    this.appService.getAllCovid().subscribe(
      (res: ICovid) => {
        this.covid = res;
        this.spinner.hide();
      },
      (err: HttpErrorResponse) => console.info(err)
    )
  }

}
