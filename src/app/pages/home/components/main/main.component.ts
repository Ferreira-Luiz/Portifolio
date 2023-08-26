import { Component, OnInit } from '@angular/core';
import { ScrollReavealService } from 'src/app/shared/services/animations/scroll-reaveal.service';
import { slideInAnimation } from 'src/app/shared/services/modules/angularAnimations.module';



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
