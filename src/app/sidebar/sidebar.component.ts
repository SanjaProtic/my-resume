import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
   simpleMode: boolean = true;

  constructor() { }

  ngOnInit() {
  }

   onLinkSelected(data){
     return data;

   }
  


}
