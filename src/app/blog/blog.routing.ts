import {BlogComponent} from './blog.component';
import {RouterModule, Routes} from '@angular/router';

const blogRoutes: Routes = [
    {path: 'blog', component: BlogComponent}
];

export const blogRouting = RouterModule.forChild(blogRoutes);
