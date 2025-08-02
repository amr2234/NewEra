import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeroComponent } from '../../components/hero/hero';
import { AboutComponent } from '../../components/about/about';
import { ServicesComponent } from '../../components/services/services';
import { CallComponent } from '../../components/call/call';
import { TechnologiesComponent } from '../../components/technologies/technologies';


declare var $: any;

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    CallComponent,
    TechnologiesComponent,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePageComponent implements OnInit {
  
  ngOnInit() {
    this.initializePage();
  }

  private initializePage() {
    document.title = 'NewEra';
    if (window.location.hash) {
      history.replaceState('', '', window.location.pathname);
    }
    setTimeout(() => {
      this.initializeAnimations();
    }, 100);
  }

  private initializeAnimations() {
    if (typeof (window as any).WOW !== 'undefined') {
      new (window as any).WOW().init();
    }

    $('a[href^="#"]').on('click', (event: any) => {
      const target = $((this as any).getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 80
        }, 1000);
      }
    });
  }
} 