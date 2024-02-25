import { Component, inject, HostListener, ElementRef } from '@angular/core';
import { Business } from './business';
import { BusinessService } from './business.service';
import { slideInOutAnimation } from '../shared/utils/animations';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../shared/utils/seo.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
  animations: [slideInOutAnimation]
})
export class BusinessComponent {
  businessList: Business[] = [];
  businessService: BusinessService = inject(BusinessService);
  selectedBusiness: Business | null = null;

  constructor( 
    private title: Title,
    private seo: SeoService,
    private elRef: ElementRef
  ) {
    this.businessList = this.businessService.getAllBusiness();
  }
  
  ngOnInit() {
    let titleString: string = "Cuáticos";
    this.title.setTitle(titleString);
  }

  toggleDescription(business: Business): void {
    this.selectedBusiness = this.selectedBusiness === business ? null : business;
  }


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const nodeName = (event.target as HTMLElement).nodeName;
    if(nodeName === 'DIV') {
      this.selectedBusiness = null;
    }
  }
  
}
