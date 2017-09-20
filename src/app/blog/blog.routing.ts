import {RouterModule, Routes} from '@angular/router';


import {BlogComponent} from './blog.component';
import {BlogPostsComponent} from './blog-posts/blog-posts.component';


const blogRoutes: Routes = [
    { path: 'blog', component: BlogComponent},
    {path: 'blog/:id', component: BlogPostsComponent},
];

export const blogRouting  = RouterModule.forChild(blogRoutes);
