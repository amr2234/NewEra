import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  newsletterEmail: string = '';

  ngOnInit() {
    this.initializeFooter();
  }

  private initializeFooter() {
  }

  subscribeNewsletter() {
    if (this.newsletterEmail && this.newsletterEmail.trim()) {
      this.newsletterEmail = ''; 
  }
}
}
