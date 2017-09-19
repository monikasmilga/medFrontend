import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AboutComponent} from './about/about.component';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'about', component: AboutComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);




// import {SigninComponent} from './admin/auth/signin/signin.component';
// import {SignoutComponent} from './admin/auth/signout/signout.component';
// import {DashboardComponent} from './admin/dashboard/dashboard.component';
// import {AllUsersComponent} from './admin/users/all-users/all-users.component';
// import {AllPostsComponent} from './admin/posts/all-posts/all-posts.component';
// import {AuthGuardService} from './auth-guard.service';
// import {AddUserComponent} from './admin/users/add-user/add-user.component';
// import {EditUserComponent} from './admin/users/edit-user/edit-user.component';
// import {AddPostComponent} from './admin/posts/add-post/add-post.component';
// import {EditPostComponent} from './admin/posts/edit-post/edit-post.component';
//
//
// const APP_ROUTES: Routes = [
//     {path: 'admin/login', component: SigninComponent},
//     {path: 'admin', component: DashboardComponent, canActivate: [AuthGuardService]},
//     {path: 'admin/users', component: AllUsersComponent, canActivate: [AuthGuardService]},
//     {path: 'admin/add-user', component: AddUserComponent, canActivate: [AuthGuardService]},
//     {path: 'admin/edit-user', component: EditUserComponent, canActivate: [AuthGuardService]},
//     {path: 'admin/posts', component: AllPostsComponent, canActivate: [AuthGuardService]},
//     {path: 'admin/add-post', component: AddPostComponent, canActivate: [AuthGuardService]},
//     {path: 'admin/edit-post', component: EditPostComponent, canActivate: [AuthGuardService]},
//     {path: 'admin/logout', component: SignoutComponent, canActivate: [AuthGuardService]},
// ];
//
// export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
