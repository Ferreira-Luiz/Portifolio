import { Component, OnInit } from '@angular/core';
import { ScrollReavealService } from 'src/app/shared/services/animations/scroll-reaveal.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private scrollRevealService : ScrollReavealService) {}

  ngOnInit(): void {
    this.scrollRevealService.init();
  }

  cards = [
    {site : 'PageSpeed Insights', desempenho : 'Excelente', link : 'https://pagespeed.web.dev/analysis/https-portifolio-lfzinn-vercel-app/4lltaccmah?form_factor=desktop'},
    {site : 'GTmetrix', desempenho : 'Ótimo', link : 'https://gtmetrix.com/reports/portifolio-lfzinn.vercel.app/XqECtDNr/'},
  ];





}

