import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './module/material.module';
import { NGXChartsModule } from './module/ngx-charts.module';

import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { MainModule } from './view/main/main.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MainModule,
    MaterialModule,
    NGXChartsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
