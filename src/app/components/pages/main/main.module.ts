import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './main.routes';
import { HeaderComponent} from 'src/app/components/UI/header/header.component'
import { SideNavComponent } from '../../UI/side-nav/side-nav.component';
import { MainComponent } from './main.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

// Font Awesome 5 module 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';


// These imports are for the icon
import { faHistory, faSlidersH, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faWindowMaximize, faUser } from '@fortawesome/free-regular-svg-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations:[
        HeaderComponent,
        SideNavComponent,
        MainComponent,
        LandingPageComponent,
        LoginComponent,
        SignUpComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        RouterModule.forChild(mainRoutes)
    ]
})

export class MainModule {
    constructor() {
        library.add(faWindowMaximize,
          faHistory,
          faSlidersH,
          faUserCircle);
      }

}
