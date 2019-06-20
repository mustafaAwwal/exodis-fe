import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Router Module
import { AppRoutingModule} from './routerModule'


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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
