import { Component, OnInit } from '@angular/core';

import { ScrollReavealService } from 'src/app/shared/animations/services/scroll-reaveal.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  selectedButton: string | null = null;
  imageSrc: string | null = null;

  constructor (private scrollReavealService : ScrollReavealService) {}


  ngOnInit(): void {
    this.imageSrc = '/assets/images/1.png';
    this.scrollReavealService.init();
  }


  loadImage(buttonId: string) {
    this.selectedButton = buttonId;

    if (buttonId === 'button1') {
      this.imageSrc = '/assets/images/1.png';
    } else if (buttonId === 'button2') {
      this.imageSrc = '/assets/images/complet.gif';
    } else if (buttonId === 'button3') {
      this.imageSrc = '/assets/images/kratos.gif';
    }
  }
}
