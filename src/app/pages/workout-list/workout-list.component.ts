import { Component } from '@angular/core';
import { InputfeildComponent } from '../../components/inputfeild/inputfeild.component';
import { TablegridComponent } from '../../components/tablegrid/tablegrid.component';
import { SelectComponent } from '../../components/select/select.component';

@Component({
  selector: 'app-workout-list',
  imports: [InputfeildComponent, TablegridComponent, SelectComponent],
  templateUrl: './workout-list.component.html',
  styleUrl: './workout-list.component.css',
})
export class WorkoutListComponent {
  searchText: string = '';
  workoutType: string = '';

  onSearchInput(value: string, type: 'searchText' | 'workoutType') {
    if (type === 'searchText') {
      this.searchText = value;
    } else if (type === 'workoutType') {
      this.workoutType = value;
    }
  }
  
}
