import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit,OnChanges {
@Input() toggle!:boolean
@Output() newEvent = new EventEmitter(this.toggle);
  constructor() { }
  task = {
    task:[
      {label: 'New', icon: 'pi pi-fw pi-plus'},
      {label: 'Open', icon: 'pi pi-fw pi-download'},
      {label: 'Undo', icon: 'pi pi-fw pi-refresh'}
    ],
    dates: {
      start_date: "10-6-2020",
      end_date: "12-8-2020"
    },
    tag_search: "",
    assigne_search:""
    
  };
  ngOnInit(): void {
       
  }
  ngOnChanges(){
    
 }
 toggler(){
  this.toggle=!this.toggle;
  this.newEvent.emit( this.toggle);
 }

}
