import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';

declare var $: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'SIT-Value - Smart IT Value';
  constructor(
    private translate: TranslateService,
    private router: Router,
    // Use @Inject decorator to specify the injection token for LanguageService
    @Inject(LanguageService) private languageService: LanguageService
  ) {
    this.translate.setDefaultLang('en');
    this.languageService.init(this.translate);
  }

  ngOnInit() {
    // Initialize jQuery plugins after view is loaded
    setTimeout(() => {
      this.initializePlugins();
    }, 100);
  }

  isContactPage(): boolean {
    return this.router.url === '/contact';
  }

  private initializePlugins() {
    // Initialize WOW.js
    if (typeof (window as any).WOW !== 'undefined') {
      new (window as any).WOW().init();
    }

    // Initialize Owl Carousel
    if ($('.owl-carousel').length) {
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
          0: { items: 1 },
          768: { items: 1 },
          1000: { items: 1 }
        }
      });
    }

    // Initialize smooth scrolling for anchor links
    $('a[href^="#"]').on('click', (event: any) => {
      const target = $((this as any).getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 80
        }, 1000);
      }
    });

    // Initialize scroll to top functionality
    $(window).on('scroll', function () {
      const scrolled = $(window).scrollTop();
      if (scrolled > 300) $('.go-top').addClass('active');
      if (scrolled < 300) $('.go-top').removeClass('active');
    });

    $('.go-top').on('click', function () {
      $("html, body").animate({
        scrollTop: "0"
      }, 400);
    });
  }
}
