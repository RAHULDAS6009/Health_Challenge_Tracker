import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inputfeild',
  imports: [CommonModule, FormsModule],
  templateUrl: './inputfeild.component.html',
  styleUrl: './inputfeild.component.css',
})
export class InputfeildComponent {
  @Input() text?: string;
  @Input() placeholdertext?: string;
  @Output() textChange = new EventEmitter<string>();
  inputValue:string="";

  onInputChange(event:any) {
    this.textChange.emit(this.inputValue);
  }
}
