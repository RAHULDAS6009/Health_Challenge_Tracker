import { Component } from '@angular/core';
import { InputfeildComponent } from '../../components/inputfeild/inputfeild.component';
import { SelectComponent } from '../../components/select/select.component';
import { ButtonComponent } from '../../components/button/button.component';
import { User } from '../../types/User';
import { Router } from '@angular/router';
import { UserService } from '../../services/userservice.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-user-form',
  imports: [InputfeildComponent, SelectComponent, ButtonComponent],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  username: string = '';
  workouttime: string = '';
  workouttype?: string;

  constructor(private router: Router, private user: UserService) {}

  onChange(value: string, field: 'username' | 'workouttime' | 'workouttype') {
    if (field === 'username') {
      this.username = value;
    } else if (field === 'workouttime') {
      this.workouttime = value;
    } else if (field === 'workouttype') {
      this.workouttype = value;
    }
  }

  onSubmit() {

    if (!this.username && !this.workouttime && this.workouttype===undefined) {
      alert('All feilds are mandatory');
      return;
    }

    if (Number.isNaN(Number(this.workouttime))) {
      alert('workout time should be in number');
      return;
    }
    const newUser: User = {
      id:uuid(),
      name: this.username,
      workouts: [
        { type: this.workouttype ?? '', minutes: Number(this.workouttime) },
      ],
    };
    this.user.addUser(newUser);
    this.router.navigate(['/userlist']);
  }
}
