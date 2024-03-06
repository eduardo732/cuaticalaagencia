import { Component } from '@angular/core';
import { slideInOutAnimation } from '../shared/utils/animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [slideInOutAnimation]
})
export class AboutComponent {}
