import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BlogPostsComponent} from './blog-posts/blog-posts.component';
import {BlogComponent} from './blog.component';
import {BlogsService} from "./shared/blogs.service";


@NgModule({
    declarations: [
        BlogComponent,
        BlogPostsComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
        // BlogComponent
    ],
    providers: [ BlogsService],
})
export class BlogModule {
}
