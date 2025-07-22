import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent implements OnInit {
  submitted = false;
  contact = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  ngOnInit() {
    this.initializeContact();
  }

  private initializeContact() {
    // Initialize form submission
    $('form').on('submit', function(e: any) {
      e.preventDefault();
      // Add your form submission logic here
      alert('Thank you for your message! We will get back to you soon.');
    });
  }

  onSubmit() {
    this.submitted = true;
    // Here you would send the form data to your backend
    // For now, just show the success message
  }
}
