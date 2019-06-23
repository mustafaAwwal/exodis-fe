import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { routerAnimations } from 'src/app/components/animations/routerAnimation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routerAnimations
  ]
})
export class AppComponent {
  
  constructor(private location: Location) {

  }

  loginPagesVerify(){
    let pathCondition = this.location.isCurrentPathEqualTo('/admin/dashboard');
    return pathCondition;
  }

  animateRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
