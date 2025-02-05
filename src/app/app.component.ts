import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
// import { InputfeildComponent } from './components/inputfeild/inputfeild.component';
// import { ButtonComponent } from './components/button/button.component';
// import { SelectComponent } from './components/select/select.component';
import { WorkoutListComponent } from './pages/workout-list/workout-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'workout-manager';
}
