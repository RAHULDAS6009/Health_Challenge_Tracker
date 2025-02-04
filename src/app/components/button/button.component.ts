import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() text?: string;
  @Output() onClickin = new EventEmitter<void>();
  onClick(): void {
    this.onClickin.emit();
  }
}
