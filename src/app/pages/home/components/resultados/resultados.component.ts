import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { CountService } from 'src/app/shared/services/animations/count.service';
import { ScrollReavealService } from 'src/app/shared/services/animations/scroll-reaveal.service';
import { slideInAnimation } from 'src/app/shared/services/modules/angularAnimations.module';



@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
  animations : [slideInAnimation],
})


export class ResultadosComponent implements  OnInit, AfterViewInit {
  showIcons = false;
  private isVisible = false;

  constructor(
    private scrollRevealService: ScrollReavealService,
    private countService: CountService,
    private elementRef: ElementRef,
    ) {}


  ngAfterViewInit(): void {
    const count1 = this.countService.createCountUp('numero1', 98, {
      suffix: '%',
    });

    const count2 = this.countService.createCountUp('numero2', 1.4, {
      decimal: '.',
      decimalPlaces: 1,
      suffix: 'seg',
    });

    const count3 = this.countService.createCountUp('numero3', 100, {
      suffix: '%',
    });

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (!this.isVisible) {
          count1.start();
          count2.start();
          count3.start();
          this.isVisible = true;
        }
      }
    });

    observer.observe(this.elementRef.nativeElement);
  }


  ngOnInit(): void {
      this.showIcons = !this.showIcons;
      this.scrollRevealService.init();
  }









}
