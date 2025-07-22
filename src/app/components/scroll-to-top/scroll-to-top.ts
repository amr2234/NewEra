import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-top.html',
  styleUrl: './scroll-to-top.css'
})
export class ScrollToTopComponent implements OnInit {

  ngOnInit() {
    this.initializeScrollToTop();
  }

  private initializeScrollToTop() {
    // Show/hide scroll to top button based on scroll position
    $(window).on('scroll', function () {
      const scrolled = $(window).scrollTop();
      if (scrolled > 300) $('.go-top').addClass('active');
      if (scrolled < 300) $('.go-top').removeClass('active');
    });
  }

  scrollToTop() {
    $("html, body").animate({
      scrollTop: "0"
    }, 1200);
  }
}
