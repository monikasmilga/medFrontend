import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';


import {UsersComponent} from './users.component';
import {UsersService} from './shared/users.service';
import {AuthService} from '../auth.service';
import {UserFormComponent} from './user-form/user-form.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        MultiselectDropdownModule,
    ],
    declarations: [
        UsersComponent,
        UserFormComponent
    ],
    exports: [
        UsersComponent
    ],
    providers: [
        UsersService, AuthService
    ]
})
export class UsersModule {
}
