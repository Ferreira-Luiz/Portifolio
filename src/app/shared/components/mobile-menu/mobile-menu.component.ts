import { Component } from '@angular/core';

import { ScrollSectionService } from '../../animations/services/scroll-section.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent {
  constructor(private scrollSectionService : ScrollSectionService){}

  scrollToSection(sectionId: string): void {
    this.scrollSectionService.scrollTo(sectionId);
  }



}
