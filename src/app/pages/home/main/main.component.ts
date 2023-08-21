import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/shared/animations/modules/angularAnimations.module';

import { ScrollReavealService } from 'src/app/shared/animations/services/scroll-reaveal.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [slideInAnimation],
})




export class MainComponent implements OnInit{

  showIcons = false;

  constructor(private scrollReavealService : ScrollReavealService) {}





  ngOnInit(): void {
    this.showIcons = !this.showIcons;
    this.scrollReavealService.init();
  }



}
