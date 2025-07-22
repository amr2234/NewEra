import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

declare var $: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent implements OnInit {
  @Input() headerStyle: string = 'style-two';

  isMobileMenuCollapsed: boolean = true;

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    const savedLang = localStorage.getItem('lang') || 'ar';
    this.switchLang(savedLang);
    this.initializeHeader();
  }

  switchLang(lang: string) {
    this.languageService.setLanguage(lang, this.translate);
  }

  toggleMobileMenu() {
    this.isMobileMenuCollapsed = !this.isMobileMenuCollapsed;
  }

  private initializeHeader() {
    const mobileMenu = document.querySelector('.mobile-menu');
if (mobileMenu) {
  if (document.body.getAttribute('dir') === 'rtl') {
    mobileMenu.classList.remove('ltr');
    mobileMenu.classList.add('rtl');
  } else {
    mobileMenu.classList.remove('rtl');
    mobileMenu.classList.add('ltr');
  }
}
    // Initialize sticky header
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 100) {
        $('#sticky-header').addClass('sticky-nav');
      } else {
        $('#sticky-header').removeClass('sticky-nav');
      }
    });

    $('.nav_scroll a[href^="#"]').on('click', (event: any) => {
      const target = $((this as any).getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 80
        }, 1000);
      }
    });
  }

  openSearch() {
    $('.search-popup').addClass('search-active');
  }

  get currentLang(): string {
    return this.translate.currentLang || this.translate.defaultLang || 'ar';
  }
}
