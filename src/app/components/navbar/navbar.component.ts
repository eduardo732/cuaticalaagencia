import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  instagramColor: string = '#FF00E7';
  linkedinColor: string = '#FF00E7';
  faBars = faBars; 
  isMenuOpen: boolean = false;
  

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
