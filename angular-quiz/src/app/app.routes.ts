import { Routes } from '@angular/router';
import { UserListComponent } from './feature/user-list/user-list.component';
import { UserDetailsComponent } from './feature/user-details/user-details.component';

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'details/:id', component: UserDetailsComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];
