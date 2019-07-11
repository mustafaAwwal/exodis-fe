import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerAnimations } from 'src/app/components/animations/routerAnimation';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    routerAnimations
  ]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  animateRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
