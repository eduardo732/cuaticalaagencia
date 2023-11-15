import { Component, inject } from '@angular/core';
import { Business } from './business';
import { BusinessService } from './business.service';
import { slideInOutAnimation } from '../utils/animations';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../utils/seo.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
  animations: [slideInOutAnimation]
})
export class BusinessComponent {
  businessList: Business[] = [];
  businessService: BusinessService = inject(BusinessService);

  constructor( private title: Title, private seo: SeoService ) {
    this.businessList = this.businessService.getAllBusiness();
  }
  
  ngOnInit() {
    let titleString: string = "Cuáticos";
    this.title.setTitle(titleString);
  }
}
