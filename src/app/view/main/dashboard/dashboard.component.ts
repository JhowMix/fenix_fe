import {Component, OnDestroy, OnInit} from '@angular/core';

import { DeviceService } from 'src/app/service/device.service';
import { ChartGeneralData } from 'src/app/model/chart/chart-general-data';
import {Observable, Subscription, timer} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit, OnDestroy {
  private timerSubscription: Subscription;
  devices: ChartGeneralData[] = [];
  view: any[] = [500, 300];

  // options
  showLegend = true;
  showLabels = true;
  isDoughnut = false;

  colorScheme = {
    domain: ['#0b00a8', '#00a82d', '#84a800', '#a80000']
  };

  constructor(
    private deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    this.timerSubscription = timer(0, 5000)
      .subscribe(() => {
        this.deviceService.getDashboardThroughput().subscribe(res => {
        res.forEach(device => {
          const raw = {
            id: device.engineId,
            name: device.name,
            value: device.throughputAverage
          };

          if (this.devices.find(el => el.id === device.engineId)) {
            const targetIndex  = this.devices.findIndex(el => el.id === device.engineId);
            this.devices[targetIndex] = raw;
          } else {
            this.devices.push(raw);
          }
        });
    },
    err => console.error(err),
    () => this.devices = [...this.devices]);
  });
}
  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }
}
