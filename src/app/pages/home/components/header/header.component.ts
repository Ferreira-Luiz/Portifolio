import { Component, OnInit } from '@angular/core';
import { ScrollReavealService } from 'src/app/shared/services/animations/scroll-reaveal.service';
import { ScrollSectionService } from 'src/app/shared/services/animations/scroll-section.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  isMenuOpen = false;

  constructor(private scrollReavealService:ScrollReavealService, private scrollSectionService : ScrollSectionService) {}


  scrollToSection(sectionId: string): void {
    this.scrollSectionService.scrollTo(sectionId);
  }


  ngOnInit(): void {
    this.scrollReavealService.init();
}



  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }







}
