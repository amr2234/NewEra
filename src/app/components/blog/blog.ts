import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class BlogComponent implements OnInit, AfterViewInit {
  ngOnInit() {}
  
  ngAfterViewInit() {
    this.initializeBlog();
  }
  
  private initializeBlog() {
    // WOW.js for animations
    if (typeof (window as any).WOW !== 'undefined') {
      new (window as any).WOW().init();
    }
  }
} 