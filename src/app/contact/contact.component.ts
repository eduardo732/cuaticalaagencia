import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../utils/animations';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../utils/seo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [slideInOutAnimation]
})
export class ContactComponent {
  instagramColor: string = 'black';
  linkedinColor: string = 'black';

  constructor(private title: Title, private seo: SeoService) {}

  ngOnInit() {
    let titleString: string = "Contacto";
    this.title.setTitle(titleString);
  }
}
