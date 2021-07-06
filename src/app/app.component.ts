import { Component, OnInit,HostListener } from '@angular/core';
import * as AOS from 'aos'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostListener('window:scroll',['$event'])
onWindowScroll(event:any){
  let element = document.querySelector('body') as HTMLElement
  if(window.pageYOffset == 0 ){
    AOS.refresh();
  }
  
}
  title = 'ClickUp';

 ngOnInit(){
   AOS.init();
   
 }
}
