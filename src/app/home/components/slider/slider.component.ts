import { Component, HostListener } from '@angular/core';
import { slideInOutAnimation } from '../shared/utils/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [slideInOutAnimation],
})
export class SliderComponent {
  images: string[] = [];

  constructor(private router: Router) {
    this.loadImages();
  }

  ngOnInit(): void {
    const slider = document.querySelector('.slider') as HTMLElement;
    const images = document.querySelectorAll('.slider img');
    const imageCount = images.length;
    const imageWidth = images[0].clientWidth;
    let currentImage = 0;

    function nextImage() {
      if (slider) {
        currentImage = (currentImage + 1) % imageCount;
        const translateXValue =
          -currentImage * (slider.clientWidth / imageCount);
        slider.style.transform = `translateX(${translateXValue}px)`;
      }
    }

    setInterval(nextImage, 3500); // Cambia de imagen cada x segundos
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.loadImages();
  }

  loadImages() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 1024) {
      this.images = [
        '/assets/slider/BANNER-01-MOBILE.png',
        '/assets/slider/BANNER-02-MOBILE.png',
        '/assets/slider/BANNER-03-MOBILE.png',
        '/assets/slider/BANNER-04-MOBILE.png',
        '/assets/slider/BANNER-05-MOBILE.png',
      ];
    } else {
      this.images = [
        '/assets/slider/BANNER-01.svg',
        '/assets/slider/BANNER-02.svg',
        '/assets/slider/BANNER-03.svg',
        '/assets/slider/BANNER-04.svg',
        '/assets/slider/BANNER-05.svg',
      ];
    }
  }

  goToContact(): void {
    if (document.getElementById('contact')) {
      document
        .getElementById('contact')
        ?.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router
        .navigate(['/'])
        .then(() =>
          document
            .getElementById('contact')
            ?.scrollIntoView({ behavior: 'smooth' })
        );
    }
  }
}
