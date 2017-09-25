import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {AuthService} from '../auth.service';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import {ScheduleComponent} from './schedule.component';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        MultiselectDropdownModule,
    ],
    declarations: [
        ScheduleComponent,
        CalendarComponent,
        ScheduleComponent,
    ],
    exports: [
        ScheduleComponent,

    ],
    providers: [
        AuthService
    ]
})
export class ScheduleModule {
}
