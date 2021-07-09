import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ServiceService } from 'src/app/service/service.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
 
export class TasksComponent implements OnInit {
  nums:number[] =[0,1,2,3]
  constructor(private service: ServiceService) { }
  raw:any;
  tasks:any;
  items!: MenuItem[];
  ngOnInit(): void {
    
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.nums, event.previousIndex, event.currentIndex);
  }
}
