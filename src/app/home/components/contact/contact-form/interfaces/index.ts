export interface ContactFormModel {
  name: string;
  email: string;
  subject: string;
  message: string;
  organization: string;
  nameError?: string;
  emailError?: string;
  subjectError?: string;
  messageError?: string;
}

export interface Modal {
  title: string;
  message: string;
  isVisible: boolean;
  isError: boolean;
}