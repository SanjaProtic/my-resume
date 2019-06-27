import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('templateState',[
        state('inital', style({
          opacity: 1
        })),
        state('final', style({
          opacity: 1
        })),
        transition('inital => final',[
          style({
            opacity: 0.5,
            transform: 'translate(-100%) scale(1.5)'
          }),
          animate(800)
          
        ]),
    ])
  ]
})
export class SidebarComponent implements OnInit {
   simpleMode: boolean = true;
   state = 'inital';

  constructor() { }

  ngOnInit() {
  }

   onLinkSelected(data){
    this.state == 'inital' ? this.state = 'final' : this.state = 'inital';
     return data;
     

   }
  


}
