import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {NavBarComponent} from './nav-bar/nav-bar.component';
import {SigninComponent} from './auth/signin/signin.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthService} from './auth.service';
import {AuthGuardService} from './auth-guard.service';
import { PostFormComponent } from './posts/post-form/post-form.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        NavBarComponent,
        SigninComponent,
        DashboardComponent,
        // SharedComponent,
        // PostFormComponent,
    ],
    exports: [
        NavBarComponent, SigninComponent
    ],
    providers: [
        AuthService, AuthGuardService
    ]
})
export class AdminModule { }
