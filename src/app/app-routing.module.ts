import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BusinessComponent } from './business/business.component';
import { slideInOutAnimation } from './shared/utils/animations';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Cuática La Agencia',
    data: { animation: slideInOutAnimation },
  },
  {
    path: 'nosotros',
    component: AboutComponent,
    data: { animation: slideInOutAnimation },
  },
  {
    path: 'servicios',
    component: BusinessComponent,
    data: { animation: slideInOutAnimation },
  },
  {
    path: 'contacto',
    component: ContactComponent,
    data: { 
      animation: slideInOutAnimation,
     },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
