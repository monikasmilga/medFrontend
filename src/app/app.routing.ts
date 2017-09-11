import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {SigninComponent} from './admin/auth/signin/signin.component';
import {SignoutComponent} from './admin/auth/signout/signout.component';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {AllUsersComponent} from './admin/users/all-users/all-users.component';
import {AllPostsComponent} from './admin/posts/all-posts/all-posts.component';

const APP_ROUTES: Routes = [
    {path: 'admin', component: SigninComponent},
    {path: 'admin/signout', component: SignoutComponent},
    {path: 'admin/dashboard', component: DashboardComponent},
    {path: 'admin/users', component: AllUsersComponent},
    {path: 'admin/posts', component: AllPostsComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
