import { Component, Input } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() isError: boolean = true;
  titleButton: string = 'Cerrar';

  constructor( private modalService: ModalService ) {}

  get titleColor(): string {
    return this.isError ? 'red' : 'blue';
  }

  close() {
    this.modalService.closeModal();
  }
}
