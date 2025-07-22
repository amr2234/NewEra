import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './call-to-action.html',
  styleUrl: './call-to-action.css'
})
export class CallToActionComponent implements OnInit, AfterViewInit {
  ngOnInit() {}
  
  ngAfterViewInit() {
    this.initializeCallToAction();
  }
  
  private initializeCallToAction() {
    // WOW.js for animations
    if (typeof (window as any).WOW !== 'undefined') {
      new (window as any).WOW().init();
    }
  }
} 