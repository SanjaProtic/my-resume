import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { trigger, style, transition, animate, query, animateChild  } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* => ContactPage',[    
      style({
          opacity: 0.3,
          transform: 'translate(-100%) scale(1)'
      }),
      animate(800)
      
      ]),
      transition('* => AboutPage',[
        style({
            opacity: 0.3,
            transform: 'rotate(50deg) scale(1.5) translateY(-50%) translateX(50%)',
        }),
        animate(800)
        
        ]),
    ])

  ]
})
export class AppComponent implements OnInit{
  title = 'my-resume';
  screenWidth = window.innerWidth;
  isDisabledAnimation = false;

  constructor(private router: Router){}

  ngOnInit(){
    this.router.navigate(['']);
    
    if(this.screenWidth < 991) {
      this.isDisabledAnimation = true;
    }
    console.log(this.screenWidth);

  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
