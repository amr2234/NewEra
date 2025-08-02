import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements OnInit {
  currentLang: string = 'en';

  constructor(
    private translate: TranslateService,
    private router: Router
  ) {
    this.currentLang = this.translate.currentLang || this.translate.getDefaultLang() || 'en';
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang;
    });
  }

  ngOnInit() {
    this.initializeHero();
  }

  private initializeHero() {
    if (typeof (window as any).WOW !== 'undefined') {
      new (window as any).WOW().init();
    }
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
