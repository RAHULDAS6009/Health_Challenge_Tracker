import { Component } from '@angular/core';
import { InputfeildComponent } from '../../components/inputfeild/inputfeild.component';
import { TablegridComponent } from '../../components/tablegrid/tablegrid.component';

@Component({
  selector: 'app-workout-list',
  imports: [InputfeildComponent,TablegridComponent],
  templateUrl: './workout-list.component.html',
  styleUrl: './workout-list.component.css'
})
export class WorkoutListComponent {

}
