import {Component, Input, OnInit} from '@angular/core';
import {ChartGeneralData} from '../../model/chart/chart-general-data';

@Component({
  selector: 'app-bar-chart-device',
  templateUrl: './bar-chart-device.component.html',
  styleUrls: ['./bar-chart-device.component.scss']
})
export class BarChartDeviceComponent implements OnInit {
  view: any[] = [450, 300];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Taxa de Transmissão (kbps)';
  showYAxisLabel = true;
  yAxisLabel = 'Interfaces';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  @Input() data: ChartGeneralData[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
