import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'covid-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // @ts-ignore
    twttr.widgets.load();
  }
}
