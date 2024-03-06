import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cuática La Agencia';
  
  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'cuatica la agencia, marketing, PR, Social Media, Influencers, Marketing Digital, Estrategia, Creación de Contenido, Fotografía '},
      {name: 'description', content: 'Somos una agencia de comunicación que valora las características extravagantes para manifestarnos de forma escandalosa. Con nuestra experiencia en PR, Medios, Redes Sociales, Influencers y Creación de Contenido, nos dedicamos a transformar tu visión en una estrategia a fin con tus objetivos. Convierte a tu marca en una marca Cuatica en la conexión de la comunicación ✨'}
    ]);
    AOS.init();
    window.addEventListener('load', AOS.refresh)
  }
}
