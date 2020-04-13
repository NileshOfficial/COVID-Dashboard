import { HttpClient } from '@angular/common/http';
import { url } from './http.service.config';

export class ServiceNameService {
    constructor(private httpClient: HttpClient) { }
}