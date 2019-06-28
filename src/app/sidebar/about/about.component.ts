import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],

})
export class AboutComponent implements OnInit {
  @Output() linkSelected = new EventEmitter();
   @Input() simpleMode: boolean;



  constructor() { }

  ngOnInit() {
   }

   onSelected(){
     if(this.simpleMode){
       this.simpleMode != this.simpleMode;
     }
     this.linkSelected.emit(this.simpleMode);
  }

}
