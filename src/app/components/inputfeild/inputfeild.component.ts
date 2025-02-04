import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputfeild',
  imports: [CommonModule],
  templateUrl: './inputfeild.component.html',
  styleUrl: './inputfeild.component.css',
})
export class InputfeildComponent {
  @Input() text?: string;
  @Input() type?: string ;
}
