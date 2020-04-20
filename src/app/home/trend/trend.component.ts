import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../../services/http.service';
import timeSeries from '../../../assets/static/timeseries.json';

@Component({
  selector: 'covid-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.css']
})
export class TrendComponent implements OnInit, OnDestroy {
  private intervalHandle: any;
  
  trendData: { cases: Array<any>, deaths: Array<any>, recovered: Array<any> } = {cases: [], deaths: [], recovered: []}
  currentTrend: string = 'cases';
  trendColor: string = '#1a73e8' //  #ff0019 #00C566
  trendDataAvailable: boolean = false;

  errMessage: string = '';

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.refreshData();
  }
  
  refreshData(): void {
    this.http.getTimeSeriesData()
    .subscribe(this.updateTrendData.bind(this), this.handleError.bind(this));
  }

  updateTrendData(data): void {
    this.trendData = data;
    this.trendDataAvailable = true;
    this.intervalHandle = setInterval(this.refreshData.bind(this), 100000);
  }

  handleError(err: ErrorEvent): void {
    if(this.trendData.cases.length === 0) {
      // this.errMessage = "error occurred, try refreshing the page";
      this.trendDataAvailable = true;
      this.trendData = this.http.transformTimeSeriesData(timeSeries);
    }
    clearInterval(this.intervalHandle);
  }

  changeTrend(trend: string, color: string): void {
    this.currentTrend = trend;
    this.trendColor = color;
  }

  getCurrentTrend(): Array<any> {
    return this.trendData[this.currentTrend];
  }

  getTrendName(): string {
    switch (this.currentTrend) {
      case 'cases': return 'confirmed';
      case 'recovered': return 'recovered';
      case 'deaths': return 'deceased';
    }
  }

  getTrendDate(): string {
    const trend = this.trendData[this.currentTrend]
    const date: string = trend[trend.length -1][0];
    return date.split(',')[0];
  }

  getTrendCount(): number {
    const trend = this.trendData[this.currentTrend]
    return trend[trend.length - 1][1];
  }
  getTrendDelta(): number {
    const trend = this.trendData[this.currentTrend]
    return trend[trend.length - 1][1] - trend[trend.length - 2][1];
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalHandle);
  }
}
