import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ContactUsComponent } from '../../components/contact-us/contact-us';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { ScrollToTopComponent } from '../../components/scroll-to-top/scroll-to-top';

declare var $: any;

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    TranslateModule, 
    ContactUsComponent,
    HeaderComponent,
  ],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css'
})
export class ContactPageComponent implements OnInit {
  
  pageInfo = {
    title: 'CONTACT_PAGE_TITLE',
    subtitle: 'CONTACT_PAGE_SUBTITLE',
    description: 'CONTACT_PAGE_DESCRIPTION',
    breadcrumb: [
      { label: 'HOME', link: '/' },
      { label: 'CONTACT', link: '/contact', active: true }
    ]
  };

  ngOnInit() {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    this.initializePage();
  }

  private initializePage() {
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