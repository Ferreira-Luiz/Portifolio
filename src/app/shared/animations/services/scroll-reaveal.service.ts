import { Injectable } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Injectable({
  providedIn: 'root'
})


export class ScrollReavealService {

  constructor() {}


  init() {
    ScrollReveal({
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 200,
      reset: true,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      scale: 1,
      viewFactor: 0.5,
      mobile: true,
    });

    ScrollReveal().reveal('.scroll');
  }
}
