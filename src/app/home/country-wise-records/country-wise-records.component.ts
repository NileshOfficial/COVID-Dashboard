import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { countryStatsRow } from '../../services/response.model';
import { faCaretDown, faCaretUp, faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'covid-country-wise-records',
  templateUrl: './country-wise-records.component.html',
  styleUrls: ['./country-wise-records.component.css']
})
export class CountryWiseRecordsComponent implements OnInit, OnDestroy {

  private handle: /* justify-content: space-between; */any;

  countryStats: Array<countryStatsRow> = [];
  searchedRecord: countryStatsRow = {};
  search: IconDefinition = faSearch;
  rise: IconDefinition = faCaretUp;
  decline: IconDefinition = faCaretDown;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.getCountryStats();
    this.handle = setInterval(this.getCountryStats.bind(this), 10000);
  }

  searchInput(event: any): void {
    if(event.target.value === '') {
      this.searchedRecord = {};
    } else {
      this.searchedRecord = {};
      this.http.getCountryRecord(event.target.value).subscribe(data => {
        this.searchedRecord = data;
      });
    }
  }
  
  getCountryStats():void {
    console.log("launched");
    this.http.getCountryWiseCasesCount().subscribe(data => {
      this.countryStats = data;
    });
  }

  getNumber(str: string): number {
    return Number(str.split(',').join(''));
  }

  ngOnDestroy(): void {
    clearInterval(this.handle);
  }
}
