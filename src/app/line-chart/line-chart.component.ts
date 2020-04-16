import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'covid-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input() chartData: Array<Array<any>>;

  public chart = {
    title: 'Styled Line Chart',
    type: "Line",
    columns: [
      'Date',
      'Count'
    ],
  }

  constructor() { }

  ngOnInit(): void {
  }

  onReady() {
  }
}
