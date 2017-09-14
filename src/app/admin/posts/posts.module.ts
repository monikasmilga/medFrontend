import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';


import {PostsComponent} from './posts.component';
import {PostsService} from './shared/posts.service';
import {AuthService} from '../auth.service';
import {PostFormComponent} from './post-form/post-form.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        PostsComponent,
        PostFormComponent
    ],
    exports: [
        PostsComponent
    ],
    providers: [
        PostsService, AuthService
    ]
})
export class PostsModule {
}
