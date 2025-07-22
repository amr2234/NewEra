import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-search-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-popup.html',
  styleUrl: './search-popup.css'
})
export class SearchPopupComponent implements OnInit {

  ngOnInit() {
    this.initializeSearchPopup();
  }

  private initializeSearchPopup() {
    // Close search popup when clicking outside
    $(document).on('click', function(e: any) {
      if (!$(e.target).closest('.search-popup').length && !$(e.target).closest('.search-box-btn').length) {
        $('.search-popup').removeClass('search-active');
      }
    });
  }

  closeSearch() {
    $('.search-popup').removeClass('search-active');
  }
}
