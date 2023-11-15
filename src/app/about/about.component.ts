import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../utils/animations';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../utils/seo.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [slideInOutAnimation]
})
export class AboutComponent {
  constructor( private title: Title, private seo: SeoService ) {}

  ngOnInit() {
    let titleString: string = "Nosotros";
    this.title.setTitle(titleString);
  }
}
