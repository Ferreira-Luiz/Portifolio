import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/shared/animations/modules/angularAnimations.module';

import { ScrollReavealService } from 'src/app/shared/animations/services/scroll-reaveal.service';


@Component({
  selector: 'app-conhecimentos',
  templateUrl: './conhecimentos.component.html',
  styleUrls: ['./conhecimentos.component.css'],
  animations: [slideInAnimation],
})


export class ConhecimentosComponent implements OnInit  {
  showIcons = false;

  constructor(private scrollReavealService:ScrollReavealService) {}

  ngOnInit(): void {
    this.showIcons = !this.showIcons;
    this.scrollReavealService.init();
  }
}
