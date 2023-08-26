import { Injectable } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Injectable({
  providedIn: 'root'
})


export class ScrollReavealService {

  constructor() {}


  init() {
    ScrollReveal({
      origin: 'top',
      distance: '20px',
      duration: 800,
      delay: 200,
      reset: false,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      viewFactor: 0.3,
      mobile: true,
    });

    ScrollReveal().reveal('.scroll');
  }
}
