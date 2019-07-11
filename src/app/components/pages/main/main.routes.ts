import { Routes } from '@angular/router';
import { LandingPageComponent } from '../main/landing-page/landing-page.component';
import { MainComponent } from './main.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const mainRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: MainComponent,
        children: [
            {
                path: '',
                component: LandingPageComponent,
                data: {animation: 'landingPage'}
            },
            {
                path: 'login',
                component: LoginComponent,
                data: {animation: 'loginPage'}
            },
            {
                path: 'signup',
                component: SignUpComponent,
                data: {animation: 'signup'}
            }


        ]
    }
]