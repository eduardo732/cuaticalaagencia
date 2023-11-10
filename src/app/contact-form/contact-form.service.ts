import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  private baseUrl = 'https://sendemailservice-dev-tjjk.1.us-1.fl0.io'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  sendEmail(formData: any): Observable<any> {
    const url = `${this.baseUrl}/send-email`;
    return this.http.post(url, formData);
  }
}
