import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  imports: [],
  templateUrl: './secondary-button.component.html',
  styleUrl: './secondary-button.component.css'
})
export class SecondaryButtonComponent {
@Input() text:string="";
@Output() onClickin=new EventEmitter<void>()

onClick(){
  this.onClickin.emit()
}
}
