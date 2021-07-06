import { Injectable } from '@angular/core';

export interface Task{
  name:string,
  description:string,
  Budget:number,
  spend:number,
  review:string,
  revision:string,
  assign_by:{
    _id:number,
    role:string,
  }
  assign_to:{
    _id:number,
    role:string,
  }[],
  timeline:{
    startingDate:Date,
    dueDate:Date,
  }
  status:boolean//to check if its fav or not

}
export interface Tasks {
  _id:string
  status: string,
  task_for:string
  title: string,
  description: string,
  date_range:{

      start: Date, end: Date
  }
  time_estimates:string,
  assigned_by:{

      _id: string,
      role: string,
  }
  asigned_to:[
      {
          id:string,
          role:string,
      }
  ],
  tags:[
      {
          tag:string
      }
  ],
  subtasks?:Task[],
  priority:string,
  sprintPoints:number,
  milestone:number,
}

export interface Strategy {
  name:string
  tasks: Tasks[]
}

@Injectable({
  providedIn: 'root'
})




export class ServiceService {

  Strategys!:Strategy[]
  tasks!:Tasks[]
  constructor() { }

  addStrategy(newStrategy:any){
    return this.Strategys.push(newStrategy);
  }

  addTask(task_data:Tasks,index:number){
    return this.Strategys[index].tasks.push(task_data);
  }
  getTasks(index:number){
    return (this.Strategys[index].tasks);
  }
}
