import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent implements OnInit {
  cases = ["Project Management","Development","Sales","CRM","Startup","Reemote Work","Marketing","Design","Health","Non-Profit"]
 
  constructor() { }

  ngOnInit(): void {
  }
  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(15);
    return  '#' + ('0000000' + color).slice(-6);
  }

}
