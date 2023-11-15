import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor( private meta: Meta ) { }

  generateTags(config: any) {
    config = {
      title: "Cuática La Agencia",
      description: "Landing page de Cuática La agencia",
      keywords: "Marketing digital, Influencers, Eventos, Fotograía, Cuática, cuatica, cuatica la agencia",
      ...config
    }

    this.meta.updateTag({name: 'keywords', content: config.keywords});
    this.meta.updateTag({name: 'description', content: config.description});
    this.meta.updateTag({name: 'title', content: config.title});
  }
}
