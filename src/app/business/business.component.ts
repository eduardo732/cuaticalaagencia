import { Component, inject } from '@angular/core';
import { Business } from './business';
import { BusinessService } from './business.service';
import { slideInOutAnimation } from '../utils/animations';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
  animations: [slideInOutAnimation]
})
export class BusinessComponent {
  businessList: Business[] = [];
  businessService: BusinessService = inject(BusinessService);

  constructor() {
    this.businessList = this.businessService.getAllBusiness();
  }
}
