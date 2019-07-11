import {Routes} from '@angular/router'
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component'


export const adminRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        component: AdminDashboardComponent
        
    }
]