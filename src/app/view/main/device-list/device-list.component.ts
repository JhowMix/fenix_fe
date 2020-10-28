import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, timer} from 'rxjs';
import {DeviceService} from '../../../service/device.service';
import {Device} from '../../../model/device';
import {MatSelectionListChange} from '@angular/material/list/selection-list';
import {ChartGeneralData} from '../../../model/chart/chart-general-data';


@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],

})
export class DeviceListComponent implements OnInit, OnDestroy {
  private portsChartSubscription: Subscription;
  devices: Device[];
  portsData: ChartGeneralData[] = [];

  constructor(
    private deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    this.deviceService.getAll().subscribe(
      res => this.devices = res,
      err => console.error(err));
  }

  ngOnDestroy(): void {
    if(this.portsChartSubscription) {
      this.portsChartSubscription.unsubscribe();
    }
  }

  onDeviceSelected(e?: MatSelectionListChange): void {
    this.portsData = [];
    let device =  e.option.value;

    if(this.portsChartSubscription) {
      this.portsChartSubscription.unsubscribe();
    }

    this.pullPortsData(device);
  }

  private pullPortsData(device: any): void {
    this.portsChartSubscription =
      timer(0, 5000)
        .subscribe(() => {
          this.deviceService.getChartPorts(device.engineId).subscribe(
            async res => {
              this.fixPortsData(res).then(() => {
                this.portsData = [...res.filter(port => port.name !== null)]
                if (device.status === 'Off') {
                  this.portsData.forEach(port => {
                    port.value = 0;
                  });
                }
              });
            },
            error => console.error(error));
        });
  }

  private fixPortsData(data: ChartGeneralData[]): Promise<any> {
    return new Promise<ChartGeneralData[]>(resolve => {
      data.forEach((port, index) => {
        if(port.name !== null) {
          if (port.name.includes('FastEthernet')) {
            let portAlias = port.name.split('FastEthernet')[1];
            portAlias = `F${portAlias}`;
            port.name = portAlias;
          }

          if (port.name.includes('Serial')) {
            let portAlias = port.name.split('Serial')[1];
            portAlias = `S${portAlias}`;
            port.name = portAlias;
          }
        }

        if(index == data.length - 1) resolve();
      });
    });
  }
}
