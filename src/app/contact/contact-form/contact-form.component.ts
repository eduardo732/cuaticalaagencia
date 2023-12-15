import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactFormService } from './contact-form.service';
import { ModalService } from '../../components/modal/modal.service';
import { ContactFormModel, Modal } from './interfaces';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  private ORGANIZATION: string = 'CUATICA_ORG';

  typeButton: string = 'submit';
  titleButton: string = '¡ATRÉVETE!';
  contactFormModel: ContactFormModel = {
    name: '',
    email: '',
    subject: '',
    message: '',
    organization: '',
  };
  modal: Modal = {
    title: '',
    message: '',
    isVisible: false,
    isError: true,
  }

  constructor(
    private contactFormService: ContactFormService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.modalService.showModal$.subscribe((showModal) => {
      this.modal.isVisible = showModal;
    });
  }

  submitForm(contactForm: NgForm) {
    if (contactForm.invalid) {
      return this.errorMessages(contactForm);
    }

    const formData: ContactFormModel = {
      ...contactForm.value,
       organization: this.ORGANIZATION
    };

    this.contactFormService.sendEmail(formData).subscribe({
      next: (response) => {
        this.openSuccessModal();
        console.log('Email sent successfully: ', response);
      },
      error: (error) => {
        this.openErrorModal();
        console.error(error);
        contactForm.reset()
      },
      complete: () => contactForm.reset(),
    });
  }

  validateEmail() {
    this.contactFormModel.emailError = '';
    if (this.contactFormModel.email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(this.contactFormModel.email)) {
        this.contactFormModel.emailError = 'E-mail no es válido';
      }
    }
  }

  private errorMessages(contactForm: NgForm) {
    this.contactFormModel.nameError = contactForm.controls['name'].hasError('required') ? 'Nombre es requerido' : '';
    this.contactFormModel.emailError = contactForm.controls['email'].hasError('required') ? 'E-mail es requerido' :
      contactForm.controls['email'].hasError('pattern') ? 'E-mail no es válido' : '';
    this.contactFormModel.subjectError = contactForm.controls['subject'].hasError('required') ? 'Asunto es requerido' : '';
    this.contactFormModel.messageError = contactForm.controls['message'].hasError('required') ? 'Mensaje es requerido' : '';
  }

  openSuccessModal() {
    this.modal.isError = false;
    this.modal.title = '¡Éxito!';
    this.modal.message = 'Gracias por tu mensaje. Hemos recibido tú contacto correctamente.';
    this.modalService.openModal(); 
  }

  openErrorModal() {
    this.modal.isError = true;
    this.modal.title = 'Error';
    this.modal.message = 'Hubo un problema al enviar tu mensaje. Tambíen puedes comunicarte con nosotros escribiendo a hola@cuaticalaagencia.com';
    this.modalService.openModal(); 
  }

  closeModal() {
    this.modalService.closeModal();
  }
}
