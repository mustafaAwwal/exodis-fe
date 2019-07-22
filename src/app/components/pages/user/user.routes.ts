import { Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserHomeComponent } from './user-home/user-home.component';

export const userRoutes: Routes = [
    {
        path: '',
        pathMatch: '',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: UserComponent,
        children: [
            {
                path: '',
                component: UserHomeComponent,
                data: {animation: 'userhomepage'}
            }
        ]
    }
];
