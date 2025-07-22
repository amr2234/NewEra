import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.html',
  styleUrl: './map.css'
})
export class MapComponent implements OnInit, AfterViewInit {
  ngOnInit() {}
  
  ngAfterViewInit() {
    this.initializeMap();
  }
  
  private initializeMap() {
    // WOW.js for animations
    if (typeof (window as any).WOW !== 'undefined') {
      new (window as any).WOW().init();
    }
  }
} 