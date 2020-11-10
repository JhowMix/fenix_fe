import {animate, style, transition, trigger} from '@angular/animations';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    animations: [
        trigger('background', [
            transition(':enter', [
                style({opacity: 0.2}),
                animate('400ms', style({ opacity: 1}))
            ])
        ])
    ]
  })
export class MainComponent implements OnInit {
    options: any[] = [
        { icon: 'dashboard', url: ''},
        { icon: 'storage', url: 'device-list'},
        { icon: 'control_point_duplicate', url: 'device-data'}
    ];

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    forward(url: string): void {
      let commands = url.trim().length > 0 ? ['v1', url] : ['v1'];

      this.router.navigate(commands)
        .catch(err => {
          console.error(err);
        });
    }
  }
