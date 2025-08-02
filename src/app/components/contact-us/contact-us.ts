import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './contact-us.html',
  styleUrls: ['./contact-us.css']
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  isLoading = false;

  contactInfo = [
    {
      icon: 'flaticon-location',
      title: 'CONTACT_ADDRESS',
      content: 'CONTACT_ADDRESS_DESC',
      link: 'https://maps.google.com'
    },
    {
      icon: 'flaticon-phone-call',
      title: 'CONTACT_PHONE',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: 'flaticon-email',
      title: 'CONTACT_EMAIL',
      content: 'info@sitvalue.com',
      link: 'mailto:info@sitvalue.com'
    }
  ];

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{7,15}$/)]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.contactForm.value)
    if (this.contactForm.invalid) {
      return;
    }
    this.isLoading = true;
    const formData = this.contactForm.value;
    emailjs.send('service_hjl735j', 'template_b5nvwfd', {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    }, 'LzLhvnoKZMgVK_A-u')
      .then(() => {
        this.isLoading = false;
        Swal.fire({
          icon: 'success',
          title: this.translate.instant('CONTACT_SUCCESS_TITLE'),
          text: this.translate.instant('CONTACT_SUCCESS_MESSAGE'),
          confirmButtonText: this.translate.instant('CONTACT_OK'),
        }).then(() => {
          this.router.navigate(['/']);
        });
        this.contactForm.reset();
        this.submitted = false;
      })
      .catch(() => {
        this.isLoading = false;
        Swal.fire({
          icon: 'error',
          title: this.translate.instant('CONTACT_ERROR_TITLE'),
          text: this.translate.instant('CONTACT_ERROR_MESSAGE')
        });
      });
  }
} 