import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    animations: [
        trigger('sidebar', [
            transition(':enter', [
                style({left: '-5%'}),
                animate('300ms 500ms ease', style({ left: '0%'}))
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
  
    constructor(
        private router: Router
    ) { }
  
    ngOnInit(): void {
    }
  
  }
  