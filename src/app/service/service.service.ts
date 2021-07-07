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
        name:"Phase 1",
        tasks:[
        {
        _id:'a',
      status: "COMPLETED",
      task_for:"Business",
      title: "Services Generated",
      description: "...",
      date_range:{
        start: new Date(), end: new Date(new Date().getTime() + Math.random() * (new Date(2022, 10, 20).getTime() - new Date().getTime()))
      },
      time_estimates:"11H",
      assigned_by:{
          _id: 'b',
          role: "Manager",
      },
      asigned_to:[
          {
              id:"string",
              role:"string",
          }
      ],
      tags:[
          { tag:"todo" },
          { tag:"important" },
      ],
      priority:"string",
      sprintPoints:0,
      milestone:0,
      },
      {
        _id: 'c',
      status: "TODO",
      task_for:"Business",
      title: "Have to implement UI",
      description: "...",
      date_range:{
        start: new Date(), end: new Date(new Date().getTime() + Math.random() * (new Date(2022, 10, 20).getTime() - new Date().getTime()))
      },
      time_estimates:"11H",
      assigned_by:{
          _id: 'd',
          role: "Manager",
      },
      asigned_to:[
          {
              id:"string",
              role:"string",
          }
      ],
      tags:[
          { tag:"todo" },
          { tag:"important" },
      ],
      priority:"string",
      sprintPoints:0,
      milestone:0,
      },
      {
        _id: 'e',
      status: "COMPLETED",
      task_for:"Business",
      title: "Find and test plugins",
      description: "...",
      date_range:{
        start: new Date(), end: new Date(new Date().getTime() + Math.random() * (new Date(2022, 10, 20).getTime() - new Date().getTime()))
      },
      time_estimates:"11H",
      assigned_by:{
          _id: 'f',
          role: "Manager",
      },
      asigned_to:[
          {
              id:"string",
              role:"string",
          }
      ],
      tags:[
          { tag:"todo" },
          { tag:"important" },
      ],
      priority:"string",
      sprintPoints:0,
      milestone:0,
      },
      {
        _id: 'g',
      status: "TODO",
      task_for:"Business",
      title: "Work on SCSS",
      description: "...",
      date_range:{
        start: new Date(), end: new Date(new Date().getTime() + Math.random() * (new Date(2022, 10, 20).getTime() - new Date().getTime()))
      },
      time_estimates:"11H",
      assigned_by:{
          _id: 'h',
          role: "Manager",
      },
      asigned_to:[
          {
              id:"string",
              role:"string",
          }
      ],
      tags:[
          { tag:"todo" },
          { tag:"important" },
      ],
      priority:"string",
      sprintPoints:0,
      milestone:0,
      },
      {
        _id: 'i',
      status: "INPROGRESS",
      task_for:"Business",
      title: "Have to implement UI",
      description: "...",
      date_range:{
        start: new Date(), end: new Date(new Date().getTime() + Math.random() * (new Date(2022, 10, 20).getTime() - new Date().getTime()))
      },
      time_estimates:"11H",
      assigned_by:{
          _id: 'j',
          role: "Manager",
      },
      asigned_to:[
          {
              id:"string",
              role:"string",
          }
      ],
      tags:[
          { tag:"todo" },
          { tag:"important" },
      ],
      priority:"string",
      sprintPoints:0,
      milestone:0,
      }
    ]
    },
    
  ]

  }
  addStrategy(newStrategy:any){
    return this.Strategys.push(newStrategy);
  }
  getStrategy(){
    return of(this.Strategys);
  }
  addTask(task_data:Tasks,index:number){
    return this.Strategys[index].tasks.push(task_data);
  }
  getTasks(index:number){
    return of(this.Strategys[index].tasks);
  }

}
