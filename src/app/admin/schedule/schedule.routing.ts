import {AuthGuardService} from '../auth-guard.service';
import {RouterModule, Routes} from '@angular/router';
import {ScheduleComponent} from './schedule.component';
import {CalendarComponent} from './calendar/calendar.component';

const scheduleRoutes: Routes = [
    {
        path: 'admin/schedule', component: ScheduleComponent,
        children: [
            {path: 'calendar/:id', component: CalendarComponent},
        ],
        canActivate: [AuthGuardService]
    },
];


export const scheduleRouting = RouterModule.forChild(scheduleRoutes);
