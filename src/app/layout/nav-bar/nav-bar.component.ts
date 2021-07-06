import { Component, OnInit,HostListener, Host } from '@angular/core';
 
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
@HostListener('window:scroll',['$event'])
onWindowScroll(event:any){
  let element = document.querySelector('.Navbar') as HTMLElement
  if(window.pageYOffset > element.clientHeight){
    this.scrolled = true;
  }else{
    this.scrolled = false;
  }
}

product:boolean= true;
scrolled = false
  constructor() { }

  ngOnInit(): void {
  }
  

}
