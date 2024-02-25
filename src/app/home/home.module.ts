import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { BusinessComponent } from './components/business/business.component';
import { SocialmediaComponent } from './components/shared/socialmedia/socialmedia.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { ModalComponent } from './components/contact/modal/modal.component';
import { ButtonComponent } from './components/contact/button/button.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { SliderComponent } from './components/slider/slider.component';

import { SpinnerInterceptor } from './components/shared/spinner/spinner.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    SliderComponent,
    NavbarComponent,
    AboutComponent,
    BusinessComponent,
    SocialmediaComponent,
    ContactComponent,
    ContactFormComponent,
    ModalComponent,
    ButtonComponent,
    SpinnerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPageScrollModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    }
  ],
  exports: [
    NavbarComponent,
  ],
})
export class HomeModule { }
