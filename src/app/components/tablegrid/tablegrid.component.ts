import { Component } from '@angular/core';
import { User } from '../../types/User';
import { userData } from '../../../../dummyUsers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tablegrid',
  standalone: true, // Add this for standalone component
  imports: [CommonModule],
  templateUrl: './tablegrid.component.html',
  styleUrls: ['./tablegrid.component.css'],
})
export class TablegridComponent {
  users: User[] = userData;
  getWorkoutTypes(user: User): string {
    return user.workouts.map(workout => workout.type).join(', ');
  }
  // Method to calculate minutes per user
  calculateUserWorkoutMinutes(user: User): number {
    return user.workouts.reduce((total, workout) => total + workout.minutes, 0);
  }
}