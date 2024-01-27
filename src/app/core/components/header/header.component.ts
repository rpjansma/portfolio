import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'portfolio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const header = document.querySelector('#mainNav');
    const logo = document.querySelector(
      '#mainNav .navbar-brand img'
    ) as HTMLElement;
    if (header && window.pageYOffset > 50) {
      header.classList.add('navbar-shrink');
      if (logo) {
        logo.style.display = 'none';
      }
    } else if (header) {
      header.classList.remove('navbar-shrink');
      if (logo) {
        logo.style.display = '';
      }
    }
  }
  ngOnInit(): void {}

  constructor() {}
}
