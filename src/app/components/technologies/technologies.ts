import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './technologies.html',
  styleUrl: './technologies.css'
})
export class TechnologiesComponent implements OnInit, AfterViewInit {
  
  isRTL = false;
  animationKey = 0;
  carouselWidth = 0;
  
  technologies = [
    {
      name: 'Angular',
      logo: 'assets/images/technologies/angular.png',
      alt: 'Angular Framework'
    },
    {
      name: 'React',
      logo: 'assets/images/technologies/react.png',
      alt: 'React Framework'
    },
    {
      name: 'Vue.js',
      logo: 'assets/images/technologies/vue.png',
      alt: 'Vue.js Framework'
    },
    {
      name: 'Flutter',
      logo: 'assets/images/technologies/Flutter.png',
      alt: 'Flutter'
    },
    {
      name: 'Power BI',
      logo: 'assets/images/technologies/Power BI.png',
      alt: 'Python Programming'
    },
    {
      name: 'NET core',
      logo: 'assets/images/technologies/NET core.png',
      alt: 'NET core'
    },
    {
      name: 'MySQL',
      logo: 'assets/images/technologies/mysql.png',
      alt: 'MySQL Database'
    },
    {
      name: 'Azure',
      logo: 'assets/images/technologies/azure.png',
      alt: 'azure'
    },
    {
      name: 'AWS',
      logo: 'assets/images/technologies/aws.png',
      alt: 'Amazon Web Services'
    },
    {
      name: 'Docker',
      logo: 'assets/images/technologies/docker.png',
      alt: 'Docker Containerization'
    },
  ];

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => {
      this.isRTL = document.documentElement.dir === 'rtl' || document.body.classList.contains('rtl');
      this.animationKey++;
    });
  }

  ngOnInit() {
    this.isRTL = document.documentElement.dir === 'rtl' || document.body.classList.contains('rtl');
    this.animationKey++;
  }
  
  ngAfterViewInit() {
    // WOW.js for animations
    if (typeof (window as any).WOW !== 'undefined') {
      new (window as any).WOW().init();
    }
    setTimeout(() => {
      const item = document.querySelector('.technology-item') as HTMLElement;
      if (item) {
        this.carouselWidth = item.offsetWidth * this.technologies.length;
      }
    });
  }
} 