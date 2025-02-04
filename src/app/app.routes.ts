import { Routes } from '@angular/router';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { WorkoutListComponent } from './pages/workout-list/workout-list.component';

export const routes: Routes = [
    {path:"",component:UserFormComponent},
    {path:"userlist",component:WorkoutListComponent},
];
