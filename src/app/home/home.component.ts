import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../services/http.service';
import { globalCasesData } from '../services/response.model';

@Component({
  selector: 'covid-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private intervalHandle: any;

  globalCaseCount: globalCasesData = {};
  trend: Array<boolean> = new Array(4);
  loadingGlobalStats: boolean = true;
  globalStatsMessage: string = '';

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.fetchGlobalStats();
    this.intervalHandle = setInterval(this.refreshData.bind(this), 5000);
  }

  refreshData(): void {
    if (!this.globalCaseCount.cases) {
      this.loadingGlobalStats = true;
    }
    this.fetchGlobalStats();
  }

  fetchGlobalStats() {
    this.http.getGlobalCasesCount()
      .subscribe(this.updateGlobalCasesData.bind(this), this.handleGlobalStatsFetchError.bind(this));
  }

  updateGlobalCasesData(data): void {
    if (this.globalCaseCount) {
      this.trend[0] = data.cases - this.globalCaseCount.cases >= 0 ? true : false;
      this.trend[1] = data.recovered - this.globalCaseCount.recovered >= 0 ? true : false;
      this.trend[2] = data.active - this.globalCaseCount.active >= 0 ? true : false;
      this.trend[3] = data.deaths - this.globalCaseCount.deaths >= 0 ? true : false;
    }

    this.globalCaseCount = data;
    this.loadingGlobalStats = false;
  }

  handleGlobalStatsFetchError(err: ErrorEvent): void {
    if (!this.globalCaseCount.cases) {
      this.globalStatsMessage = "error occurred, try refreshing page";
      this.loadingGlobalStats = false;
    }
    clearInterval(this.intervalHandle);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalHandle);
  }

}
