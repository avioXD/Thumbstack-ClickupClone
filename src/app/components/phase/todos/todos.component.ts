import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TodoMapService } from 'src/app/service/todo-map.service';
export interface Toggler{
  show:boolean,
  despo:boolean,
  new_task :boolean
}
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {
  toggler:Toggler[] =[
    {
      show:false,
      despo:false,
      new_task :false
    },
  ]
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
  files!:TreeNode[]
  cols:any;
  todos:any
  constructor(private todoMap: TodoMapService) { 
   
    }

  ngOnInit(): void {
    for(let item of [0,1,3,4,5] ){
      this.toggler.push( {
        show:false,
        despo:false,
        new_task :false
      })
    }
      this.cols=this.todoMap.getCols(); 
    console.log("COLS"+ this.cols);
    this.todoMap.getFile().subscribe((file:any)=>{
      this.files = file.data;
    })
    
  }
  toggle(i:any){
    this.toggler[i].show=!this.toggler[i].show;
  }
   
}
