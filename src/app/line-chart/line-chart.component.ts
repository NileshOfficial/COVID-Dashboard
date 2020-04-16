import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'covid-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, OnChanges {

  @Input() chartData: Array<Array<any>> = [];
  @Input() lineColor: string;

  chart = {
    type: "Line",
    columns: [
      '',
      ''
    ],
    options: {
      axes: {
        y: {
          0: { side: 'right' },
        }
      },
      legend: {
        position: 'none'
      },
      colors: ['#1a73e8']
    }
  }

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(change: SimpleChanges): void {
    this.chart.options.colors = [this.lineColor];
  }
}