import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { APIService } from './api.service';
import { Device } from '../model/device';

@Injectable({ providedIn: 'root'})
export class DeviceService {

    private resource = APIService.API_URL + 'devices';

    constructor(
        private apiService: APIService
    ) { }

    getAll(): Observable<Device[]> {
        return this.apiService.http.get<Device[]>(this.resource);
    }
}