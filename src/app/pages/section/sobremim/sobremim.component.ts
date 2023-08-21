import { Component, OnInit } from '@angular/core';

import { ScrollReavealService } from 'src/app/shared/animations/services/scroll-reaveal.service';

@Component({
  selector: 'app-sobremim',
  templateUrl: './sobremim.component.html',
  styleUrls: ['./sobremim.component.css']
})
export class SobremimComponent implements OnInit {

  constructor(private scrollReavealService: ScrollReavealService){}

  ngOnInit(): void {
      this.scrollReavealService.init();
  }

}
