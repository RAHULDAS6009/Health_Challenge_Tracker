import { Component, Input } from '@angular/core';
import { User } from '../../types/User';
import { userData } from '../../../../dummyUsers';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { SecondaryButtonComponent } from '../secondary-button/secondary-button.component';
import { UserService } from '../../services/userservice.service';

@Component({
  selector: 'app-tablegrid',
  imports: [CommonModule, ButtonComponent, SecondaryButtonComponent],
  templateUrl: './tablegrid.component.html',
  styleUrls: ['./tablegrid.component.css'],
})
export class TablegridComponent {
  @Input() searchValue?: string;
  @Input() searchWorkout?: string;
  currentPage: number = 1;
  itemsPerPage: number = 3;
  users: User[] = [];

  constructor(private user: UserService) {
    this.users = this.user.getUsers();
  }
  get filteredUsers(): User[] {
    let filtered = this.users; 
  
    if (this.searchValue) {
      const lowerCaseSearchName = this.searchValue.trim().toLowerCase();
      filtered = filtered.filter((user) =>
        user.name.toLowerCase().includes(lowerCaseSearchName)
      );
    }
  
    if (this.searchWorkout) {
      const lowerCaseSearchWorkout = this.searchWorkout.trim().toLowerCase();
      filtered = filtered.filter((user) =>
        user.workouts.some((workout) => 
          workout.type.toLowerCase().includes(lowerCaseSearchWorkout)
        )
      );
    }
  
    return filtered;
  }

  get totalPages(): number {
    return Math.ceil(this.filteredUsers.length / this.itemsPerPage);
  }
  get paginatedUser(): User[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredUsers.slice(startIndex, startIndex + this.itemsPerPage);
  }


  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  getWorkoutTypes(user: User): string {
    return user.workouts.map((workout) => workout.type).join(', ');
  }

  changeItemsPerPage(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.itemsPerPage = parseInt(target.value, 10);
    this.currentPage = 1;
  }

  calculateUserWorkoutMinutes(user: User): number {
    return user.workouts.reduce((total, workout) => total + workout.minutes, 0);
  }
}
