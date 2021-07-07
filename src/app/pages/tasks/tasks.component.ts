import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private service: ServiceService) { }
  raw:any;
  ngOnInit(): void {
    this.service.getStrategy().subscribe((data)=>{
      this.raw = data;
      this.raw = JSON.stringify(this.raw)
    })
  }

}
