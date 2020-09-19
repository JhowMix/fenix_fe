import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { MaterialModule } from './module/material.module';
import { NGXChartsModule } from './module/ngx-charts.module';

import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { MainComponent } from './view/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NGXChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
