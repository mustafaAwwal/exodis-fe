import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';



// Components



const routes: Routes = [
    {
        path: '',
        loadChildren: 'src/app/components/pages/main/main.module#MainModule'
    }
];


@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule {
}
