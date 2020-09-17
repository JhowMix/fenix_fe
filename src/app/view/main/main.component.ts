import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    animations: [
        trigger('sidebar', [
            transition(':enter', [
                style({left: '-5%'}),
                animate('400ms 700ms ease', style({ left: '0%'}))
            ])
        ]),
        trigger('background', [
            transition(':enter', [
                style({opacity: 0.2}),
                animate('400ms', style({ opacity: 1}))
            ])
        ])
    ]
  })
  export class MainComponent {
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
  }
  