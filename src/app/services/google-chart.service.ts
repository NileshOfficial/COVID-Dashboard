import { Injectable } from '@angular/core';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleChartService {

  private googleCharts: any
  constructor() { 
    this.googleCharts = google;
  }

  getChartLoader() {
    return this.googleCharts;
  }
}
