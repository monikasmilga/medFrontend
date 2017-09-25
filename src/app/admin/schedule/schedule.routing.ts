import {AuthGuardService} from '../auth-guard.service';
import {RouterModule, Routes} from '@angular/router';
import {ScheduleComponent} from './schedule.component';

const scheduleRoutes: Routes = [
    {
        path: 'admin/schedule', component: ScheduleComponent,
        children: [
            {path: 'calendar', component: ScheduleComponent},
        ],
        canActivate: [AuthGuardService]
    },
];


export const scheduleRouting = RouterModule.forChild(scheduleRoutes);
