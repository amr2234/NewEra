import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.html',
  styleUrl: './brands.css'
})
export class BrandsComponent implements OnInit, AfterViewInit {

  ngOnInit() {}

  ngAfterViewInit() {
    this.initializeBrands();
  }

  private initializeBrands() {
    // Continuous, smooth, right-moving, side-by-side logo carousel
    if ($('.brand_list.owl-carousel').length) {
      $('.brand_list.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1, // very short timeout for continuous effect
        smartSpeed: 3000,   // slow transition for smoothness
        slideTransition: 'linear',
        responsive: {
          0: { items: 2 },
          600: { items: 3 },
          1000: { items: 6 }
        }
      });
    }
    // WOW.js for animations
    if (typeof (window as any).WOW !== 'undefined') {
      new (window as any).WOW().init();
    }
  }
}
