import { Injectable } from '@angular/core';
import { Tasks } from '../models/tasks';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  TODO!:Tasks[];
  NOT_STARTED!:Tasks[];
  SUBMITTED!:Task[];
  TO_SEND!:Task[]
  DONE!:Task[];
  TRASH!:[];
  constructor() { }
}
