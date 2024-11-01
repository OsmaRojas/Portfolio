import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  imports: [CommonModule]
})
export class ModalComponent {

  @Input() isOpen: boolean = false;
  @Input() title: string = '';
  @Input() content: any[] = [];

  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
