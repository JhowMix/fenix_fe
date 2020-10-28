import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {APIService} from './api.service';
import {Device} from '../model/device';
import {ChartGeneralData} from '../model/chart/chart-general-data';

@Injectable({ providedIn: 'root'})
export class DeviceService {

    private resource = (url: string = '') => APIService.API_URL + `device/${url}`;

    constructor(
        private apiService: APIService
    ) { }

    getDashboardThroughput(): Observable<Device[]> {
        return this.apiService.http.get<Device[]>(this.resource('dashboard/throughput'));
    }

    getAll(): Observable<Device[]> {
      return this.apiService.http.get<Device[]>(this.resource('all'));
    }

    getChartPorts(engineId: string): Observable<ChartGeneralData[]> {
      return this.apiService.http.get<ChartGeneralData[]>(
        this.resource((`${engineId}/port/chart/all`)));
    }
}
