import { Component, OnInit } from '@angular/core';
import { single } from './data';

import { Device } from '../../../model/device';
import { DeviceService } from 'src/app/service/device.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  devices: Device[];
  single: any[];
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(
    private deviceService: DeviceService
  ) {
    Object.assign(this, { single });
  }

  ngOnInit() {
    this.deviceService.getAll().subscribe(
      res => this.devices = res
    );
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

}