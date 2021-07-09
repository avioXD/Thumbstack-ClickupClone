import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService, PrimeNGConfig} from 'primeng/api';
@Component({
  selector: 'app-phase',
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.scss']
})
export class PhaseComponent implements OnInit {
  
  constructor(private primengConfig: PrimeNGConfig,) { }
  toggler={
    inside:false,
    despo:false,
    new_task :false
  }
 
  
  todos:any
  items!: MenuItem[];
    items2!: MenuItem[];
    rangeDates!: Date[];
    dates!:Date;
  search_value :any;
  
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    

   

 

  }
  

}
