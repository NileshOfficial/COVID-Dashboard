import { Component, OnDestroy } from '@angular/core';
import { HttpService } from '../../services/http.service';
import mapData from '../../../assets/static/map.json';

@Component({
  selector: 'covid-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent implements OnDestroy {
  private intervalHandle: any;
  private err = false;
  public chartConfig = {
    title: 'Changing Chart',
    type: 'GeoChart',
    data: [],
    columns: ['Countries', 'COVID-19 cases'],
    options: {
      animation: {
        duration: 250,
        easing: 'ease-in-out',
        startup: true
      },
      colorAxis: { colors: ['#FFC4C6', '#FF979D', '#FF6F7D', '#FF0019'] },
      backgroundColor: '#f5f5f5',
      datalessRegionColor: '#f8f9fa',
      defaultColor: '#6c757d'
    }
  };

  loadingData: boolean = false;
  errMessage: string = ''

  constructor(private http: HttpService) {
  }

  refreshData() {
    if(this.chartConfig.data.length === 0)
      this.loadingData = true;
    this.http.getMapData()
      .subscribe(this.updateChartData.bind(this), this.handlerErrorResponse.bind(this));
  }

  updateChartData(data): void {
    this.loadingData = false;
    this.chartConfig.data = data;
  }

  handlerErrorResponse(err: ErrorEvent) {
    if (this.chartConfig.data.length === 0) {
      this.updateChartData(this.http.transformMapData(mapData));
      this.err = true;
      // this.errMessage = 'error occurred, try refreshing page';
    }
    clearInterval(this.intervalHandle);
  }

  chartReady() {
    this.refreshData();
    if(!this.err)
      this.intervalHandle = setInterval(this.refreshData.bind(this), 100000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalHandle);
  }
}
