import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
// import { InputfeildComponent } from './components/inputfeild/inputfeild.component';
// import { ButtonComponent } from './components/button/button.component';
// import { SelectComponent } from './components/select/select.component';
import { WorkoutListComponent } from './pages/workout-list/workout-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'workout-manager';
  constructor() {
    localStorage.setItem(
      'users',
      '[{"id":"1","name":"John Doe","workouts":[{"type":"Running","minutes":30},{"type":"Cycling","minutes":45}]},{"id":"2","name":"Jane Smith","workouts":[{"type":"Swimming","minutes":60},{"type":"Running","minutes":20}]},{"id":"3","name":"Mike Johnson","workouts":[{"type":"Yoga","minutes":50},{"type":"Cycling","minutes":40}]},{"id":"4","name":"Emily Davis","workouts":[{"type":"Running","minutes":35},{"type":"Yoga","minutes":45}]},{"name":"rahul","workouts":[{"type":"yoga","minutes":78}]},{"id":"ec81c809-8606-46cd-b85b-b889bbdf1f21","name":"ashis","workouts":[{"type":"cycling","minutes":52}]}]'
    );
  }
}
