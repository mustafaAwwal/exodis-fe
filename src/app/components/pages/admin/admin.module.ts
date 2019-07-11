import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routes';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SideNavComponent } from '../../UI/side-nav/side-nav.component';

// Font Awesome 5 module 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// These imports are for the icon
import { faHistory, faSlidersH, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faWindowMaximize, faUser } from '@fortawesome/free-regular-svg-icons';


@NgModule({
    declarations: [AdminDashboardComponent, SideNavComponent],
    imports: [
        CommonModule,
        FontAwesomeModule,
        RouterModule.forChild(adminRoutes)
    ]
})

export class AdminModule {
    constructor(){
        library.add(
            faHistory,
            faSlidersH,
            faUserCircle,
            faWindowMaximize,
            faUser
        )
    }
}
