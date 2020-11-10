import {Injectable} from '@angular/core';
import {APIService} from './api.service';
import {Observable} from 'rxjs';
import {Address} from '../model/address';
import {Device} from '../model/device';

@Injectable({
  providedIn: 'root'
})
export class SnmpService {

  private resource = (url: string = '') => APIService.API_URL + `snmp/${url}`;

  constructor(
    private apiService: APIService
  ) { }

  check(addr: Address): Observable<any> {
    return this.apiService.http.post(this.resource('check'), addr);
  }

  add(addr: Address): Observable<Device> {
    return this.apiService.http.post<Device>(this.resource('device'), addr);
  }
}
