import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactFormService } from './contact-form.service';
import { ModalService } from '../../components/modal/modal.service';


interface ContactFormModel {
  name: string;
  email: string;
  subject: string;
  message: string;
  nameError?: string;
  emailError?: string;
  subjectError?: string;
  messageError?: string;
}

interface Modal {
  title: string;
  message: string;
  isVisible: boolean;
  isError: boolean;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  model: ContactFormModel = {
    name: '',
    email: '',
    subject: '',
    message: '',
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

    const formData: ContactFormModel = contactForm.value;

    this.contactFormService.sendEmail(formData).subscribe({
      next: (response) => {
        this.openSuccessModal();
        console.log('Email sent successfully: ', response);
      },
      error: (error) => {
        this.openErrorModal();
        console.error(error);
      },
      complete: () => contactForm.reset(),
    });
  }

  validateEmail() {
    this.model.emailError = '';
    if (this.model.email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(this.model.email)) {
        this.model.emailError = 'E-mail no es válido';
      }
    }
  }

  private errorMessages(contactForm: NgForm) {
    this.model.nameError = contactForm.controls['name'].hasError('required') ? 'Nombre es requerido' : '';
    this.model.emailError = contactForm.controls['email'].hasError('required') ? 'E-mail es requerido' :
      contactForm.controls['email'].hasError('pattern') ? 'E-mail no es válido' : '';
    this.model.subjectError = contactForm.controls['subject'].hasError('required') ? 'Asunto es requerido' : '';
    this.model.messageError = contactForm.controls['message'].hasError('required') ? 'Mensaje es requerido' : '';
  }

  openSuccessModal() {
    this.modal.isError = false;
    this.modal.title = '¡Éxito!';
    this.modal.message = 'Gracias por tu mensaje. Hemos recibido la información correctamente.';
    this.modalService.openModal(); 
  }

  openErrorModal() {
    this.modal.isError = false;
    this.modal.title = 'Error';
    this.modal.message = 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.';
    this.modalService.openModal(); 
  }

  closeModal() {
    this.modalService.closeModal();
  }
}
//TODO: Validar email antes de enviar la petición
//TODO: atomizar componente botón
//TODO: Cambiar color al modal según respuesta