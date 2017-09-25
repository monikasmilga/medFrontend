import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {AuthService} from '../auth.service';
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';
import {ScheduleComponent} from './schedule.component';
import {CalendarComponent} from './calendar/calendar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'angular-calendar';


@NgModule({

    declarations: [
        ScheduleComponent,
        CalendarComponent,
        ScheduleComponent,
    ],

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        MultiselectDropdownModule,
        BrowserAnimationsModule,
        CalendarModule.forRoot()
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
