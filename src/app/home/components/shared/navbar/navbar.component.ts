import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  instagramColor: string = 'white';
  linkedinColor: string = 'white';
  faBars = faBars; 
  isMenuOpen: boolean = false;
  menuClass: string = 'menu-icon'; // Agrega la propiedad navbarClass y inicialízala
  
  constructor(private elementRef: ElementRef<HTMLElement>) {}
  

  private getMenuClass(scrollPosition: number): string {
    return  scrollPosition >= 6380 ? 'contact-nav' : 'menu-icon';
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scroll(el: string) {
    if(document.getElementById(el)) {
      document.getElementById(el)?.scrollIntoView({behavior: 'smooth'});
    } else {
      document.getElementById("slider")?.scrollIntoView({behavior: 'smooth'});
    }
    this.isMenuOpen = false;
  }


  @HostListener('document:scroll', ['$event'])
  onWindowScroll(event: CustomEvent) {
    event.preventDefault();
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.menuClass = this.getMenuClass(scrollPosition);

  }
}
