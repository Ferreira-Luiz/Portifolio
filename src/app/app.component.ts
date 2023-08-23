import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './shared/animations/modules/angularAnimations.module';

import { ScrollReavealService } from './shared/animations/services/scroll-reaveal.service';
import { ScrollSectionService } from './shared/animations/services/scroll-section.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation],
})

export class AppComponent implements OnInit {
  title = 'port';
  imageUrl = '/assets/icons/happy.png';
  showIcons = false;

  constructor(private scrollReavealService: ScrollReavealService, private scrollSectionService : ScrollSectionService) {}



  ngOnInit(): void {
    this.showIcons = true;
    this.scrollReavealService.init();

  }





}
