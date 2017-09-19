import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './registration.component';

const registrationRoutes: Routes = [
    {path: 'registration', component: RegistrationComponent}
];

export const registrationRouting = RouterModule.forChild(registrationRoutes);

