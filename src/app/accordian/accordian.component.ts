import { Component, OnInit } from '@angular/core';
import faq from '../../assets/static/faq.json';

@Component({
  selector: 'covid-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {

  data = faq;
  currentTab: number = null;
  constructor() { }

  ngOnInit(): void {

  }

  changeCurrentTab(idx: number) {
    this.currentTab = this.currentTab === idx ? null : idx;
  }

}
