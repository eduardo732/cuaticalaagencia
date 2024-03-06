import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactFormModel } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  private BASE_URL: string = 'https://sendemailservice-dev-tjjk.1.us-1.fl0.io';

  constructor(private http: HttpClient) {}

  sendEmail(formData: ContactFormModel): Observable<string> {
    const url = `${this.BASE_URL}/send-email`;
    return this.http.post(url, formData, { responseType: 'text' });
  }
}
