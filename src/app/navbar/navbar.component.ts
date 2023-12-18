import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import { Router, NavigationEnd  } from '@angular/router';

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
  
  constructor(
    private router: Router,
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.menuClass = this.getMenuClass(this.router.url);
      }
    });
  }

  // this.menuClass = 'contact-nav';
  private getMenuClass(url: string): string {
    if (url.includes('/contacto')) {
      return 'contact-nav';
    } else {
      return 'menu-icon';
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
