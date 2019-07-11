import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routes';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SideNavComponent } from '../../UI/side-nav/side-nav.component';


@NgModule({
    declarations: [AdminDashboardComponent, SideNavComponent],
    imports: [CommonModule,RouterModule.forChild(adminRoutes)]
})

export class AdminModule {}
