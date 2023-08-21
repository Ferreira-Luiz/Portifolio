import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, style, transition, animate, sequence } from '@angular/animations';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    BrowserAnimationsModule
  ]
})
export class AnimationsModule { }


export const slideInAnimation = trigger('slideIn', [
  transition(':enter', [
    sequence([
      style({ opacity: 0, transform: 'translateX(-100%)' }),
      animate('2000ms ease', style({ opacity: 1, transform: 'translateX(0)' })),
      animate('2000ms ease', style({ opacity: 1, transform: 'translateX(0)' })),
      animate('2000ms ease', style({ opacity: 1, transform: 'translateX(0)' })),
    ])
  ])
]);
