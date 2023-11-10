import { Component } from '@angular/core';
import { slideInOutAnimation } from '../utils/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [slideInOutAnimation]
})
export class ContactComponent {
  instagramColor: string = 'black';
  linkedinColor: string = 'black';
}
