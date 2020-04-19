import { Component, OnInit, OnDestroy, Renderer2, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { HttpService } from '../services/http.service';
import { globalCasesData } from '../services/response.model';

@Component({
  selector: 'covid-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  private intervalHandle: any;

  @ViewChild('colLeft') colLeft;
  @ViewChild('recoveryTrackerDiv') recoveryTracker;
  @ViewChild('tweetsDiv') tweets;

  globalCaseCount: globalCasesData = {};
  trend: Array<boolean> = new Array(4);
  loadingGlobalStats: boolean = true;
  globalStatsMessage: string = '';

  constructor(private http: HttpService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.fetchGlobalStats();
    this.intervalHandle = setInterval(this.refreshData.bind(this), 5000);
  }

  ngAfterViewInit() {
    this.onResize();
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

  onResize() {
    if (window.innerWidth > 768) {
      const colHeight = this.colLeft.nativeElement.offsetHeight
      const recoveryTrackerHeight = this.recoveryTracker.nativeElement.offsetHeight + 15;
      this.renderer.setStyle(this.tweets.nativeElement, "height", `${colHeight - recoveryTrackerHeight}px`);
    } else {
      this.renderer.setStyle(this.tweets.nativeElement, "height", "auto");
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalHandle);
  }

}
