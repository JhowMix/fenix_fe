import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class APIService {

    static readonly API_URL = environment.url;
    
    constructor(
        public http: HttpClient
    ) { }
}