import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { MaterialModule } from 'src/app/module/material.module';

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ]
  })
  
export class MainModule { }