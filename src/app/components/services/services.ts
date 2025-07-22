import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent implements OnInit {

  ngOnInit() {
    this.initializeServices();
  }

  private initializeServices() {
    // Initialize WOW.js for animations
    if (typeof (window as any).WOW !== 'undefined') {
      new (window as any).WOW().init();
    }
  }
}
