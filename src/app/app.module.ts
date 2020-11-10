import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';

import {MaterialModule} from './module/material.module';
import {NGXChartsModule} from './module/ngx-charts.module';

import {HomeComponent} from './view/home/home.component';
import {LoginComponent} from './view/login/login.component';
import {DashboardComponent} from './view/main/dashboard/dashboard.component';
import {MainComponent} from './view/main/main.component';
import {DeviceListComponent} from './view/main/device-list/device-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BarChartDeviceComponent } from './shared/bar-chart-device/bar-chart-device.component';
import { DeviceDataComponent } from './view/main/device-data/device-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainComponent,
    DashboardComponent,
    DeviceListComponent,
    BarChartDeviceComponent,
    DeviceDataComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModule,
        NGXChartsModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
