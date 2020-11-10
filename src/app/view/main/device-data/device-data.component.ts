import { Component, OnInit } from '@angular/core';
import {APIService} from '../../../service/api.service';
import {SnmpService} from '../../../service/snmp.service';
import {Address} from '../../../model/address';
import {Device} from '../../../model/device';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';

@Component({
  selector: 'app-device-data',
  templateUrl: './device-data.component.html',
  styleUrls: ['./device-data.component.scss']
})
export class DeviceDataComponent implements OnInit {

  target: string;
  progressText: string;
  hasDeviceFound = false;
  isFetching = false;

  device: Device;
  ports: any;

  constructor(
    private snmpService: SnmpService
  ) { }

  ngOnInit(): void {
  }

  fetch() {
    this.isFetching = true;
    this.progressText = 'Buscando dispositivo...'
    let addr = { ipv4: this.target } as Address;

    this.snmpService.check(addr).subscribe(res => {
      if(res.alive) {
        this.progressText = 'Listando informações...';

        this.snmpService.add(addr).subscribe(res => {
          this.progressText = '';
          this.isFetching = false;
          this.device = res;
          this.hasDeviceFound = true;
        })
      }
    }, err => console.error(err),
      () => {});
  }


}
