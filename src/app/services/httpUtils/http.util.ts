import { HttpClient } from '@angular/common/http';
import { url } from './http.config';

export class HttpUtil {
    constructor(private http: HttpClient) { }

    getGlobalCasesCount() {
        return this.http.get(url.globalCasesCountUrl);
    }

    getCountryWiseCasesCount() {
        return this.http.get(url.countryWiseCasesCountUrl);
    }
}