import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';



import {AuthService} from '../auth.service';
import {RolesComponent} from './roles.component';
import {RoleFormComponent} from './role-form/role-form.component';
import {RolesService} from './shared/roles.service';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        RolesComponent,
        RoleFormComponent,
    ],
    exports: [
        RolesComponent
    ],
    providers: [
       RolesService, AuthService
    ]
})
export class RolesModule {
}
