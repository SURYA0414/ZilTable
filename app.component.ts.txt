import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, Directive, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';

  Details: any = [];
  searchText: string;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http
      .get('https://zil-test.s3.us-east-1.amazonaws.com/json-data.json')
      .subscribe((data: any) => {
        this.Details = data;
        console.log(this.Details);
      });
  }
}
