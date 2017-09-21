import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {HomeComponent } from './home/home.component';
import {NotFoundComponent } from './not-found/not-found.component';
import {AdminModule} from './admin/admin.module';
import {adminRouting} from './admin/admin.routing';
import {UsersModule} from './admin/users/users.module';
import {usersRouting} from './admin/users/users.routing';
import {postsRouting} from './admin/posts/posts.routing';
import {PostsModule} from './admin/posts/posts.module';
import {RolesModule} from './admin/roles/roles.module';
import {rolesRouting} from './admin/roles/roles.routing';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RegistrationComponent } from './registration/registration.component';
import { MenuComponent } from './menu/menu.component';
import {homeRouting} from './home/home.routing';
import {registrationRouting} from './registration/registration.routing';
import {BlogModule} from './blog/blog.module';
import {blogRouting} from './blog/blog.routing';
import {BlogPostComponent} from './blog/blog-post/blog-posts.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
        // BlogComponent,
        AboutComponent,
        ContactsComponent,
        RegistrationComponent,
        MenuComponent,
        BlogPostComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        ReactiveFormsModule,
        AdminModule,
        adminRouting,
        UsersModule,
        PostsModule,
        RolesModule,
        rolesRouting,
        usersRouting,
        postsRouting,
        homeRouting,
        registrationRouting,
        blogRouting,
        BlogModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
