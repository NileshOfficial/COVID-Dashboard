import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../services/http.service';
import { globalCasesData } from '../services/response.model';

@Component({
  selector: 'covid-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private intervalHandles: Array<any> = [];
  
  globalCaseCount: globalCasesData = {};
  trend: Array<boolean> = new Array(4);

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.intervalHandles.push(setInterval(this.refreshData.bind(this), 5000));
  }

  refreshData(): void {
    this.http.getGlobalCasesCount().subscribe(data => {
      if(this.globalCaseCount) {
        this.trend[0] = data.cases - this.globalCaseCount.cases >= 0 ? true : false;
        this.trend[1] = data.recovered - this.globalCaseCount.recovered >= 0 ? true : false;
        this.trend[2] = data.active - this.globalCaseCount.active >= 0 ? true : false;
        this.trend[3] = data.deaths - this.globalCaseCount.deaths >= 0 ? true : false;
      }

      this.globalCaseCount = data;
    });
  }

  ngOnDestroy(): void {
    this.intervalHandles.forEach(handle => { 
      clearInterval(handle) 
    });
  }

}
