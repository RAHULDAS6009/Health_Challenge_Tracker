import { Injectable } from '@angular/core';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  constructor() {}

  getUsers(): User[] {
    try {
      const usersJson = localStorage.getItem('users');
      return usersJson ? JSON.parse(usersJson) : [];
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
      
      localStorage.setItem('users', JSON.stringify(users));
    } catch (error) {
      console.error('Error adding user:', error);
    }
  }
}