import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { url, apiKeys } from './http.config';
import { globalCasesData, countryWiseStats, countryStatsRow, newsData } from './response.model';
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

    getCountryWiseCasesCount(): Observable< Array<countryStatsRow> > {
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

    getMapData() {
        return this.http.get(url.mapDataUrl);
    }
}