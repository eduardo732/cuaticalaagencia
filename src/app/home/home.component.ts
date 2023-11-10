import { Component, OnInit  } from '@angular/core';
import { slideInOutAnimation } from '../utils/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideInOutAnimation]
})
export class HomeComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
    const slider = document.querySelector(".slider") as HTMLElement;
    const images = document.querySelectorAll(".slider img");
    const imageCount = images.length;
    const imageWidth = images[0].clientWidth;
    let currentImage = 0;

    function nextImage() {
      if (slider) {
        currentImage = (currentImage + 1) % imageCount;
        slider.style.transform = `translateX(-${currentImage * imageWidth}px)`;
      }
    }

    setInterval(nextImage, 3500); // Cambia de imagen cada x segundos
  }

  goToContact(): void {
    this.router.navigate(['/contacto'])
  }
}
