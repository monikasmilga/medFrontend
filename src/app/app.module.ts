import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AllUsersComponent } from './admin/users/all-users/all-users.component';
import { UserComponent } from './admin/users/user/user.component';
import {routing} from './app.routing';
import {UserService} from './user.services';
import { AllPostsComponent } from './admin/posts/all-posts/all-posts.component';
import { PostComponent } from './admin/posts/post/post.component';
import {PostService} from './post.services';
import { SigninComponent } from './admin/auth/signin/signin.component';
import { SignoutComponent } from './admin/auth/signout/signout.component';
import { AuthService } from './auth.service';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent,
    AllPostsComponent,
    PostComponent,
    SigninComponent,
    SignoutComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [UserService, PostService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
