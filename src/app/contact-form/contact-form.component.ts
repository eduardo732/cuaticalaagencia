import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactFormService } from './contact-form.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  nameError: string = '';
  emailError: string = '';
  subjectError: string = '';
  messageError: string = '';

  constructor(private contactFormService: ContactFormService) {}


  submitForm(contactForm: NgForm) {
     if (contactForm.invalid) {
      return this.errorMessages(contactForm);
    }

    const formData = contactForm.value;

    // Call the service to send the email
    this.contactFormService.sendEmail(formData).subscribe({
      next: response => console.log('Email sent successfully: ', response),
      error: () => console.error(),
      complete: () => contactForm.reset()
    });
  }
  private errorMessages(contactForm: any) {
    this.nameError = contactForm.controls['nombre'].hasError('required') ? 'Nombre es requerido' : '';
    this.emailError = contactForm.controls['email'].hasError('required') ? 'E-mail es requerido' : '';
    this.subjectError = contactForm.controls['asunto'].hasError('required') ? 'Asunto es requerido' : '';
    this.messageError = contactForm.controls['mensaje'].hasError('required') ? 'Mensaje es requerido' : '';
    return;
  }
}

