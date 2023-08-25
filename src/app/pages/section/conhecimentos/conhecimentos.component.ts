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

  experiencias = [
    { imagem : '../../../../assets/icons/angular.svg', title : 'Angular', alt : 'Icone do Angular'},
    { imagem : '../../../../assets/icons/tsIcon.svg', title : 'TypeScript', alt : 'Icone do TypeScript'},
    { imagem : '../../../../assets/icons/icons8-css.svg', title : 'CSS', alt : 'Icone do CSS'},
    { imagem : '../../../../assets/icons/icons8-html.svg', title : 'HTML', alt : 'Icone do HTML'},
    { imagem : '../../../../assets/icons/icons8-js.svg', title : 'Css', alt : 'Icone do CSS'},
  ]


  ferramentas = [
    { imagem : '../../../../assets/icons/icons8-git.svg', title : 'Git', alt : 'Icone do Git'},
    { imagem : '../../../../assets/icons/visualStudioCode.svg', title : 'VS Code', alt : 'Icone do Visual Studio Code'},
    { imagem : '../../../../assets/icons/icons8-github.svg', title : 'GitHub', alt : 'Icone do GitHub'},
  ]

















}
