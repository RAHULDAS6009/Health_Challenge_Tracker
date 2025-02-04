import { Component } from '@angular/core';
import { InputfeildComponent } from '../../components/inputfeild/inputfeild.component';
import { SelectComponent } from '../../components/select/select.component';
import { ButtonComponent } from '../../components/button/button.component';
import { User, Workout } from '../../types/User';

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
    console.log("hy")
    if (!this.username && !this.workouttime) {
      alert('All feilds are mandatory');
    }
    const newUser: User = {
      name: this.username,
      workouts: [
        { type: this.workouttype ?? '', minutes: Number(this.workouttime) },
      ],
    };
    console.log(newUser)
    
  }
}
