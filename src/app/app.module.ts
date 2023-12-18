import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerModule } from './shared/components/spinner/spinner.module';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './shared/routing/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { BusinessComponent } from './business/business.component';
import { SocialmediaComponent } from './shared/components/socialmedia/socialmedia.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ModalComponent } from './contact/modal/modal.component';
import { ButtonComponent } from './contact/button/button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    BusinessComponent,
    SocialmediaComponent,
    ContactComponent,
    ContactFormComponent,
    ModalComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    SpinnerModule,
    FormsModule,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
