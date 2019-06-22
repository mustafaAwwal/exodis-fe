import {Router,RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core'
import {LandingPageComponent} from 'src/app/components/pages/common/landing-page/landing-page.component';
import {LoginComponent} from 'src/app/components/pages/auth/login/login.component';
import {SignUpComponent} from 'src/app/components/pages/auth/sign-up/sign-up.component';
import {AdminDashboardComponent} from 'src/app/components/pages/admin/admin-dashboard/admin-dashboard.component';


const routes : Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'login',component: LoginComponent},
    {path: 'signup',component: SignUpComponent},
    {path: 'admin',children: [
        {path: 'dashboard', component: AdminDashboardComponent}
    ]}
]
    


@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule {
}
