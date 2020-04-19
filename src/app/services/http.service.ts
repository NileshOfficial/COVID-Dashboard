import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { url, apiKeys } from './http.config';
import { globalCasesData, countryWiseStats, countryStatsRow, newsData, timeseries } from './response.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) { }

    getGlobalCasesCount(): Observable<globalCasesData> {
        return this.http.get<globalCasesData>(url.globalCasesCountUrl).pipe(map(res => {
            return {
                cases: res.cases,
                recovered: res.recovered,
                active: res.active,
                deaths: res.deaths
            }
        }));
    }

    getCountryWiseCasesCount(): Observable<Array<countryStatsRow>> {
        return this.http.get<countryWiseStats>(url.countryWiseCasesCountUrl)
            .pipe(map(res => {
                return res.data.rows;
            }));
    }

    getCountryRecord(name: string): Observable<countryStatsRow> {
        let params = new HttpParams().set("search", name);
        return this.http.get<countryWiseStats>(url.countryWiseCasesCountUrl, {
            params: params
        }).pipe(map(res => {
            return res.data.rows[0];
        }));
    }

    getNews(): Observable<newsData> {
        return this.http.get<newsData>(url.newsUrl, {
            headers: new HttpHeaders().set('x-api-key', apiKeys.newsApiKey
        )});
    }

    getMapData(): Observable<Array<Array<any>>> {
        return this.http.get<countryWiseStats>(url.countryWiseCasesCountUrl, {
            params: new HttpParams().set("limit", "200")
        }).pipe(map(this.transformMapData.bind(this)));
    }

    transformMapData(response) {
        let mappedData: Array<Array<any>>;

            response.data.rows.shift();
            let stats = response.data.rows;

            mappedData = stats.map((country: countryStatsRow) => {
                return [country.country_abbreviation, Number(country.total_cases.split(",").join(''))];
            });
            return mappedData;
    }

    getTimeSeriesData(): Observable<{cases: Array<any>, deaths: Array<any>, recovered: Array<any>}> {
        return this.http.get<timeseries>(url.timeseriesUrl)
            .pipe(map(this.transformTimeSeriesData.bind(this)));
    }

    transformTimeSeriesData(response) {
        const timeseriesData = {
            cases: null, deaths: null, recovered: null
        };

        let cases = [], deaths = [], recovered = [];

        
        cases = Object.keys(response.cases).map(entry => 
            [this.reformatDate(entry), response.cases[entry]]
        );

        recovered = Object.keys(response.recovered).map(entry => 
            [this.reformatDate(entry), response.recovered[entry]]
        );
        
        deaths = Object.keys(response.deaths).map(entry => 
            [this.reformatDate(entry), response.deaths[entry]]
        );

        timeseriesData.cases = cases;
        timeseriesData.recovered = recovered;
        timeseriesData.deaths = deaths;

        return timeseriesData;
    }

    private reformatDate(date: string) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const datePieces = date.split('/');
        return [ months[Number(datePieces[0]) - 1] + ' ' + datePieces[1], ' ' + datePieces[2]].join();
    }
}