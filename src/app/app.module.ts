import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';

//Router Module
import { AppRoutingModule} from './routerModule'

//Font Awesome 5 module 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';


//These imports are for the icon 
import { faHistory,faSlidersH,faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faWindowMaximize, faUser } from '@fortawesome/free-regular-svg-icons';

//Imports for Animations 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/pages/common/landing-page/landing-page.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { SignUpComponent } from './components/pages/auth/sign-up/sign-up.component';
import { AdminDashboardComponent } from './components/pages/admin/admin-dashboard/admin-dashboard.component';
import { SideNavComponent } from './components/UI/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    AdminDashboardComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor() {
    library.add(faWindowMaximize,faHistory,faSlidersH,faUserCircle)
  }

}
