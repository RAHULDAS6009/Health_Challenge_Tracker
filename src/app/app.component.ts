import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputfeildComponent } from './components/inputfeild/inputfeild.component';

@Component({
  selector: 'app-root',
  imports: [InputfeildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Workout-manager';
}
