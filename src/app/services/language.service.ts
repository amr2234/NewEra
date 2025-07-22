import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  init(translate: TranslateService) {
    const lang = localStorage.getItem('lang') || 'en';
    translate.use(lang);
    this.setBodyDirection(lang);
  }

  setLanguage(lang: string, translate: TranslateService) {
    localStorage.setItem('lang', lang);
    translate.use(lang);
    this.setBodyDirection(lang);
  }

  private setBodyDirection(lang: string) {
    const body = document.body;
    if (lang === 'ar') {
      body.classList.add('rtl');
      body.setAttribute('dir', 'rtl');
    } else {
      body.classList.remove('rtl');
      body.setAttribute('dir', 'ltr');
    }
  }
} 