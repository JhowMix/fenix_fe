import { Component, OnInit } from '@angular/core';

import { DeviceService } from 'src/app/service/device.service';
import { PieData } from 'src/app/model/chart/pie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  devices: PieData[] = [];
  single: any[];
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#0b00a8', '#00a82d', '#84a800', '#a80000']
  };

  constructor(
    private deviceService: DeviceService
  ) {
  }

  ngOnInit() {
    this.deviceService.getAll().subscribe(res => {
        res.forEach(el => {
          this.devices.push({
            name: el.name,
            value: el.throughputAverage
          });
        });
    },
    err => console.error(err),
    () => this.devices = [...this.devices]);
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  throughputFormat(data) {
    return data + " Kbps"
  }
}