import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BusinessComponent } from './business/business.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Cuática La Agencia'
  },
  {
    path: 'nosotros',
    component: AboutComponent
  },
  {
    path: 'servicios',
    component: BusinessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
