import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  ngOnInit() {}
  
  ngAfterViewInit() {
    this.initializePortfolio();
  }
  
  private initializePortfolio() {
    // Portfolio Isotope with imagesLoaded
    $('.image_load').imagesLoaded(() => {
      if ($.fn.isotope) {
        var $portfolio = $('.image_load');
        
        $portfolio.isotope({
          itemSelector: '.grid-item',
          filter: '*',
          resizesContainer: true,
          layoutMode: 'masonry',
          transitionDuration: '0.8s'
        });
        
        $('.menu-filtering li').on('click', (event: any) => {
          $('.menu-filtering li').removeClass('current_menu_item');
          $(event.currentTarget).addClass('current_menu_item');
          
          var selector = $(event.currentTarget).attr('data-filter');
          $portfolio.isotope({
            filter: selector,
          });
        });
      }
    });
    
    // WOW.js for animations
    if (typeof (window as any).WOW !== 'undefined') {
      new (window as any).WOW().init();
    }
  }
} 