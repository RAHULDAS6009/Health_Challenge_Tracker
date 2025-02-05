import { Injectable } from '@angular/core';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly STORAGE_KEY = 'users';

  constructor() {}

  getUsers(): User[] {
    try {
      const usersJson = localStorage.getItem(this.STORAGE_KEY);
      
      if (!usersJson || usersJson === 'null') {
        return [];
      }

      const users = JSON.parse(usersJson);
      return Array.isArray(users) ? users : [];
    } catch (error) {
      console.error('Error retrieving users:', error);
      return [];
    }
  }

  addUser(user: User): void {
    try {
      const users = this.getUsers();
      const existingUser = users.find(u => u.name === user.name);

      if (existingUser) {
        existingUser.workouts.push(...user.workouts);
      } else {
        users.push(user);
      }

      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
      } catch (error) {
        console.error('Error saving to localStorage:', error);
        throw error; 
      }
    } catch (error) {
      console.error('Error adding user:', error);
    }
  }
}