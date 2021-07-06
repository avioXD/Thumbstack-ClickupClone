import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Strategy } from '../models/strategy';
import { Tasks } from '../models/tasks';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  Strategys:Strategy[];

  constructor() { 
    this.Strategys = [
      {
        name:"",
        tasks:[
        {
        _id:"string",
      status: "string",
      task_for:"string",
      title: "string",
      description: "string",
      date_range:{
        start: new Date(), end: new Date()
      },
      time_estimates:"string",
      assigned_by:{
          _id: "string",
          role: "string",
      },
      asigned_to:[
          {
              id:"string",
              role:"string",
          }
      ],
      tags:[
          {
              tag:"string",
          }
      ],
      priority:"string",
      sprintPoints:0,
      milestone:0,
      },
    ]
    },
    {
      name:"",
      tasks:[]
    }
  ]

  }
  addStrategy(newStrategy:any){
    return this.Strategys.push(newStrategy);
  }

  addTask(task_data:Tasks,index:number){
    return this.Strategys[index].tasks.push(task_data);
  }
  getTasks(index:number){
    return of(this.Strategys[index].tasks);
  }

}
