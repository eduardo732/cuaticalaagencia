import { Injectable } from '@angular/core';
import { Business } from './business';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor() { }

  businessList: Business[] = [
    {
      id: 0,
      img: "/assets/business/img01.jpg",
      title: "B R A N \n D I N G",
      text: "Te ayudamos a crear, diseña e implementar tu propuesta de valor e identidad de marca de forma creativa. Construimos tu historia para generar conexiones con tu audiencia y diferentes stakeholders.",
      arrow: ""
    },
    {
      id: 1,
      img: "/assets/business/img02.jpg",
      title: `R E D E S \n S O C I A L E S`,
      text: "Transformamos la “relevancia” en conexión con personas y empresas en Social Media. Trabajamos la interacción real y construimos comunidad enfocada en marca y generación de negocio. Estrategia / Content Marketing / Paid Media / Analytics.",
      arrow: ""
    },
    {
      id: 2,
      img: "/assets/business/img03.jpg",
      title: "M E D I A \n R E L A T I O N S",
      text: "Desarrollamos, gestionamos y planificamos contenidos e historias de calidad que se integren en los medios y conecten con las audiencias para difundir el mejor mensaje de marca. ",
      arrow: ""
    },
    {
      id: 3,
      img: "/assets/business/img04.jpg",
      title: "I N F L U E N C E R \n M A R K E T I N G",
      text: "Somos especialistas en extraer el verdadero valor del Influencer & Content creator para las marcas. Seleccionamos solo a aquellos que representan los valores de marca, son creíbles y que nos ayudan en trabajar en las diferentes partes del funnel generando notoriedad que convierte.",
      arrow: ""
    },
    {
      id: 4,
      img: "/assets/business/img05.png",
      title: "P R & \n E V E N T S",
      text: "Transformamos la “relevancia” en conexión con personas y empresas en Social Media. Trabajamos la interacción real y construimos comunidad enfocada en marca y generación de negocio. Estrategia / Content Marketing / Paid Media / Analytics.",
      arrow: ""
    },
    {
      id: 5,
      img: "/assets/business/img06.jpg",
      title: "D I S E Ñ O Y \n D E S A R R O L L O \n W E B",
      text: "Nos enfocamos en desarrollar tu universo de marca digital con las herramientas necesarias para la proyección de identidad y servicios que se ajusten a la necesidad de tu marca.",
      arrow: ""
    },
    {
      id: 6,
      img: "/assets/business/img07.png",
      title: "F O T O \n G R A \n F Í A",
      text: "A través del objetivo, miramos de otra forma para capturar la escencia de un photocall, unas editoriales de moda, productos, bodegones, foodstyling, deco...",
      arrow: ""
    }
  ]

  getAllBusiness(): Business[] {
    return this.businessList;
  }
}
