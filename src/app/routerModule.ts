import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core'



// Components
import {LandingPageComponent} from 'src/app/components/pages/common/landing-page/landing-page.component';
import {LoginComponent} from 'src/app/components/pages/auth/login/login.component';
import {SignUpComponent} from 'src/app/components/pages/auth/sign-up/sign-up.component';



const routes : Routes = [
    {path: '', component: LandingPageComponent, data: {animation: 'landingPage'}},
    {path: 'login',component: LoginComponent, data: {animation: 'login'}},
    {path: 'signup',component: SignUpComponent, data: {animation: 'signup'} },
    {
        path: 'admin',
        loadChildren: 'src/app/components/pages/admin/admin.module#AdminModule'
    }
]
    


@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule {
}
