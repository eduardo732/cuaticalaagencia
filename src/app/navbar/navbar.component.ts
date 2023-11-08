import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faBars = faBars; // Asigna el ícono de menú a una propiedad
  isMenuOpen: boolean = false;
  

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
