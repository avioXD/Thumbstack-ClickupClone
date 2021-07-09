import { Component, OnInit } from '@angular/core';
 
import {TreeNode} from 'primeng/api';
import { ServiceService } from 'src/app/service/service.service';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  constructor(private service: ServiceService ) {
   }

  raw:any;
  files!:TreeNode[] ;

  files2!: TreeNode[];

  cols!: any[];
  ngOnInit() {
   this.service.getDummy1().subscribe((response:any)=>{
     this.files =  response.tasks
     console.log(this.files)
   })
  //  this.service.getDummy1().subscribe((response:any)=>{
  //    this.files1 = response.data
  //    console.log(this.files1)
  //  })

    this.cols = [
        { field: 'status', header: 'status' },
        { field: 'title', header: 'Title' },
        { field: 'task_for', header: 'Task For' },
        {field: 'description', header:'Description'},
        { field: 'time_estimates', header: 'estimates'  },
        { field: 'tags', header: 'Tag' },
        
    ];
}
}
