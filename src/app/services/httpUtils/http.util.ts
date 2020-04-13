import { HttpClient } from '@angular/common/http';
import { url } from './http.config';
import { globalCasesData } from '../response.model';

export class HttpUtil {
    constructor(private http: HttpClient) { }

    getGlobalCasesCount() {
        return this.http.get<globalCasesData>(url.globalCasesCountUrl);
    }

    getCountryWiseCasesCount() {
        return this.http.get(url.countryWiseCasesCountUrl);
    }

    getMapData() {
        return this.http.get(url.mapDataUrl);
    }
}