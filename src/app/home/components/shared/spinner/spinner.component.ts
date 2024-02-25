import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {
  isLoading: Subject<boolean> = this.spinnerService.isLoading;

  constructor(
    private spinnerService: SpinnerService
  ) {}

}
