import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-call',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './call.html',
  styleUrl: './call.css'
})
export class CallComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) {}
  
  ngOnInit() {}
  
  ngAfterViewInit() {
    this.initializeCall();
  }
  
  private initializeCall() {
    // WOW.js for animations
    if (typeof (window as any).WOW !== 'undefined') {
      new (window as any).WOW().init();
    }
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
} 