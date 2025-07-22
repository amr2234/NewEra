import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.html',
  styleUrl: './team.css'
})
export class TeamComponent implements OnInit {

  ngOnInit() {
    this.initializeTeam();
  }

  private initializeTeam() {
    // Initialize WOW.js for animations
    if (typeof (window as any).WOW !== 'undefined') {
      new (window as any).WOW().init();
    }
  }
}
