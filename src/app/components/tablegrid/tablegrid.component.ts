import { Component, Input } from '@angular/core';
import { User } from '../../types/User';
import { userData } from '../../../../dummyUsers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tablegrid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tablegrid.component.html',
  styleUrls: ['./tablegrid.component.css'],
})
export class TablegridComponent {
  @Input() searchValue?: string;
  users: User[] = userData;

  // acts like a property
   get filteredUsers(): User[] {
    if (!this.searchValue) return this.users;
    return this.users.filter((user) =>
      user.name
        .toLowerCase()
        .includes((this.searchValue ?? '').trim().toLowerCase())
    );
  }

  // get paginatedUser():User[]{
  //   const users:User[]=this.filteredUsers();
  //   return users
  // }

  getWorkoutTypes(user: User): string {
    return user.workouts.map((workout) => workout.type).join(', ');
  }

  calculateUserWorkoutMinutes(user: User): number {
    return user.workouts.reduce((total, workout) => total + workout.minutes, 0);
  }
}
