import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { DashboardComponent } from './view/main/dashboard/dashboard.component';
import { MainComponent } from './view/main/main.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'v1', 
    component: MainComponent,
    children: [
      { path: '', component: DashboardComponent, outlet: 'sidebar'}
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
