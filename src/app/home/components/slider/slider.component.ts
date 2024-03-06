import { Component } from '@angular/core';
import { slideInOutAnimation } from '../shared/utils/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [slideInOutAnimation],
})
export class SliderComponent {

  constructor(private router: Router) {}
  ngOnInit(): void {
    const slider = document.querySelector('.slider') as HTMLElement;
    const images = document.querySelectorAll('.slider img');
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
    if(document.getElementById('contact')) {
      document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
    } else {
      this.router.navigate(['/']).then(
        () => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})
      );
    }
  }
}
