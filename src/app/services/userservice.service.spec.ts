import { TestBed } from '@angular/core/testing';
import { UserService } from './userservice.service';
import { User } from '../types/User';

describe('UserService', () => {
  let service: UserService;

  const mockUser: User = {
    id: '1',
    name: 'John Doe',
    workouts: [
      { type: 'Running', minutes: 30 }
    ]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe('getUsers', () => {
    it('should return empty array when localStorage is empty', () => {
      const users = service.getUsers();
      expect(users).toEqual([]);
    });

    it('should handle null localStorage value', () => {
      localStorage.setItem('users', 'null');
      const users = service.getUsers();
      expect(users).toEqual([]);
    });

    it('should handle invalid JSON in localStorage', () => {
      localStorage.setItem('users', 'invalid json');
      const users = service.getUsers();
      expect(users).toEqual([]);
    });

    it('should return users from localStorage', () => {
      localStorage.setItem('users', JSON.stringify([mockUser]));
      const users = service.getUsers();
      expect(users).toEqual([mockUser]);
    });
  });

  describe('addUser', () => {
    it('should handle localStorage errors when adding user', () => {
      spyOn(localStorage, 'setItem').and.throwError('Storage error');
      spyOn(console, 'error');
      
      service.addUser(mockUser);
      
      expect(console.error).toHaveBeenCalledWith(
        'Error saving to localStorage:', 
        jasmine.any(Error)
      );
    });

  });
});