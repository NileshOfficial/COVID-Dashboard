import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { url } from './http.config';
import { globalCasesData, countryWiseStats, countryStatsRow } from './response.model';
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

    getMapData(): Observable<Array<Array<any>>> {
        return this.http.get<countryWiseStats>(url.countryWiseCasesCountUrl, {
            params: new HttpParams().set("limit", "200")
        }).pipe(map(response => {
            let mappedData: Array<Array<any>>;

            response.data.rows.shift();
            let stats = response.data.rows;

            mappedData = stats.map((country: countryStatsRow) => {
                return [country.country_abbreviation, Number(country.total_cases.split(",").join(''))];
            });
            return mappedData;
        }));
    }
}