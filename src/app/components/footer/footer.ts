import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();

  ngOnInit() {
    this.initializeFooter();
  }

  private initializeFooter() {
    // Initialize any footer-specific functionality
    // For now, just a placeholder for future enhancements
  }
}
