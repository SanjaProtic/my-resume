
  import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],

})
export class ContactComponent implements OnInit {
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
