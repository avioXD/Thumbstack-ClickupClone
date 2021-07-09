import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Strategy } from '../models/strategy';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
interface col {
  field: string, header: string
}
 
@Injectable({
  providedIn: 'root'
})
export class TodoMapService {
   cols: col[] = [];
  Strategys!:Strategy[];
  constructor(private http:  HttpClient) { }
 
  getCols(){
    this.cols = [] ;
     this.http.get('assets/data/filessystem.json').subscribe((data:any)=>{
        console.log(Object.keys(data.data[0].data))
        for(let key of Object.keys(data.data[0].data)){
          this.cols.push({field : key ,  header: key})
        }
     })
     return this.cols;
     // console.log(data.tasks[0].data)

  }

  getFile(){
    return this.http.get('assets/data/filessystem.json');
  }
}
