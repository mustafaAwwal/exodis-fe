import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { SideNavComponent } from '../../UI/side-nav/side-nav.component';

// Font Awesome 5 module 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';


// These imports are for the icon
import { faHistory, faSlidersH, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faWindowMaximize, faUser } from '@fortawesome/free-regular-svg-icons';

@NgModule({
    declarations: [
        UserComponent,
        UserHomeComponent,
        SideNavComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes),
        FontAwesomeModule
    ]
})

export class UserModule {
    constructor() {
        library.add(faWindowMaximize,
          faHistory,
          faSlidersH,
          faUserCircle);
      }
}
