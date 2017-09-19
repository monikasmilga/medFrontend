import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';

const homeRoutes: Routes = [
    {path: '', component: HomeComponent}
];

export const homeRouting = RouterModule.forChild(homeRoutes);
