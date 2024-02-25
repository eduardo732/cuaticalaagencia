import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent {
  @Input() instagramColor: string = '#ffffff';
  @Input() linkedinColor: string = '#ffffff';
}
