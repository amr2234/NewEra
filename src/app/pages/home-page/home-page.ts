import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HeroComponent } from '../../components/hero/hero';
import { AboutComponent } from '../../components/about/about';
import { ServicesComponent } from '../../components/services/services';
import { BrandsComponent } from '../../components/brands/brands';
import { CallComponent } from '../../components/call/call';
import { TechnologiesComponent } from '../../components/technologies/technologies';
import { BlogComponent } from '../../components/blog/blog';
import { TestimonialComponent } from '../../components/testimonial/testimonial';
import { CallToActionComponent } from '../../components/call-to-action/call-to-action';

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
    BrandsComponent,
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
    // Set page title
    document.title = 'SIT-Value - Smart IT Value';
    
    // Prevent automatic scrolling to hash on page load
    if (window.location.hash) {
      // Clear the hash without scrolling
      history.replaceState('', '', window.location.pathname);
    }
    
    // Initialize any page-specific functionality
    setTimeout(() => {
      this.initializeAnimations();
    }, 100);
  }

  private initializeAnimations() {
    // Initialize WOW.js for animations
    if (typeof (window as any).WOW !== 'undefined') {
      new (window as any).WOW().init();
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
  }
} 