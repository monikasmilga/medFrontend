import {ContactsComponent} from './contacts.component';
import {RouterModule, Routes} from '@angular/router';
const contactsRoutes: Routes = [
    {path: 'contacts', component: ContactsComponent}
];

export const contactsRouting = RouterModule.forChild(contactsRoutes);
