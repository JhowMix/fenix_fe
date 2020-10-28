import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './view/home/home.component';
import {LoginComponent} from './view/login/login.component';
import {DashboardComponent} from './view/main/dashboard/dashboard.component';
import {DeviceListComponent} from './view/main/device-list/device-list.component';
import {MainComponent} from './view/main/main.component';
import {DeviceDataComponent} from './view/main/device-data/device-data.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'v1',
    component: MainComponent,
    children: [
      { path: 'device-data', component: DeviceDataComponent },
      { path: 'device-list', component: DeviceListComponent },
      { path: '', component: DashboardComponent }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
