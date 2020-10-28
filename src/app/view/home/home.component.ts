import { Component, OnInit, ViewChild, TemplateRef, ElementRef, ViewChildren, AfterViewInit, AfterContentInit } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('toLoginPage', [
      state('filledPage', style({
        right: '0'
      })),
      state('rawPage', style({
        right: '-100%'
      })),
      transition('filledPage => rawPage', [
        animate('0.7s ease')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  @ViewChild('titulos') titulos: ElementRef;

  hasLaunched = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  launch(): void {
    this.titulos.nativeElement.classList.add('animate__fadeOut');
    this.titulos.nativeElement.classList.add('animate__faster');
    this.hasLaunched = !this.hasLaunched;
  }

  onAnimationDone(event: AnimationEvent): void {
    if(this.hasLaunched) {
      this.router.navigate(['/login']);
    }
  }
}
