import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from './http.config';
import { globalCasesData } from './response.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) { }

    getGlobalCasesCount() {
        return this.http.get<globalCasesData>(url.globalCasesCountUrl).pipe(map(res => {
            return {
                cases: res.cases,
                recovered: res.recovered,
                active: res.active,
                deaths: res.deaths
            }
        }));
    }

    getCountryWiseCasesCount() {
        return this.http.get(url.countryWiseCasesCountUrl);
    }

    getMapData() {
        return this.http.get(url.mapDataUrl);
    }
}