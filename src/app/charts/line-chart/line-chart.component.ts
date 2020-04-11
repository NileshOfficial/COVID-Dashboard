import { Component, OnInit } from '@angular/core';
import { GoogleChartService } from '../../services/google-chart.service';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

  private chartsLib: any;

  constructor(private googleCharts: GoogleChartService) {
    this.chartsLib = googleCharts.getChartLoader();
    this.chartsLib.charts.load('current', {'packages':['corechart','table']});
    this.chartsLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  private drawChart(){
    let data = this.chartsLib.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2004',  1000,      400],
      ['2005',  1170,      460],
      ['2006',  660,       1120],
      ['2007',  1030,      540]
    ]);

    let chart = new this.chartsLib.visualization.LineChart(document.getElementById('divLineChart'));

    chart.draw(data);
  } 

}
