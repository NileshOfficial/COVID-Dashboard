import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { countryStatsRow } from '../../services/response.model';
import { faCaretDown, faCaretUp, faSearch, faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'covid-country-wise-records',
  templateUrl: './country-wise-records.component.html',
  styleUrls: ['./country-wise-records.component.css']
})
export class CountryWiseRecordsComponent implements OnInit, OnDestroy {

  @ViewChild('input') input;

  private handle: any;
  private currentSearchQuery: string = '';

  countryStats: Array<countryStatsRow> = [];
  searchedRecord: countryStatsRow = {};
  search: IconDefinition = faSearch;
  rise: IconDefinition = faCaretUp;
  decline: IconDefinition = faCaretDown;
  close: IconDefinition = faTimes;

  searchingRecord: boolean = false;
  fetchingCountriesStats: boolean = false;
  searchMessage: string = '';
  statsListMessage: string = '';

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getCountryStats();
  }

  onInput(event: any): void {
    if (event.target.value === '') {
      this.resetSearch();
    } else {
      this.resetSearch(true);
      this.currentSearchQuery = event.target.value.toLowerCase();
      this.searchCountry();
    }
  }

  emptyField() {
    this.input.nativeElement.value = "";
    this.resetSearch();
  }

  private searchCountry() {
    this.http.getCountryRecord(this.currentSearchQuery)
      .subscribe(this.updateSearchRecord.bind(this), this.handleSearchErrResponse.bind(this));
  }

  private updateSearchRecord(data): void {
    this.searchingRecord = false;
    if (data)
      this.searchedRecord = data;
    else
      this.searchMessage = "No such country";
  }

  private handleSearchErrResponse(err: ErrorEvent): void {
    this.searchMessage = "Error Occurred, Try Again Later";
    this.searchingRecord = false;
  }

  private resetSearch(searchingRecord: boolean = false): void {
    this.searchedRecord = {};
    this.currentSearchQuery = '';
    this.searchingRecord = searchingRecord;
    this.searchMessage = '';
  }

  private getCountryStats(): void {
    if (this.countryStats.length === 0)
      this.fetchingCountriesStats = true;
    this.http.getCountryWiseCasesCount()
      .subscribe(this.updateCountriesList.bind(this), this.handleListFetchError.bind(this));
  }

  private updateCountriesList(data): void {
    this.fetchingCountriesStats = false;
    this.countryStats = data;
    this.handle = setInterval(this.getCountryStats.bind(this), 100000);
  }

  private handleListFetchError(err: ErrorEvent): void {
    this.fetchingCountriesStats = false;
    if (this.countryStats.length === 0) {
      this.statsListMessage = "Error Occurred, Try Refreshing Page";
      clearInterval(this.handle);
    }
  }

  getNumber(str: string): number {
    return Number(str.split(',').join(''));
  }

  ngOnDestroy(): void {
    clearInterval(this.handle);
  }
}
