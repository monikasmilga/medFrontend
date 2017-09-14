import {AuthGuardService} from '../auth-guard.service';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users.component';
import {UserFormComponent} from './user-form/user-form.component';

const usersRoutes: Routes = [
    {path: 'admin/users', component: UsersComponent, pathMatch: 'full', canActivate: [AuthGuardService]},
    {path: 'admin/users/new', component: UserFormComponent, canActivate: [AuthGuardService]},
    {path: 'admin/users/:id', component: UserFormComponent, canActivate: [AuthGuardService]}
];

export const usersRouting = RouterModule.forChild(usersRoutes);
