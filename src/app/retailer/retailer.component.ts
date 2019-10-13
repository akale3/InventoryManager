import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.css']
})
export class RetailerComponent implements OnInit {

  searchKeyword: string;
  items: Array<any>;

  constructor() { }

  ngOnInit() {
    this.items = [];
    let entry1 = new Item('Item1', 10, 5, 1);
    let entry2 = new Item('Item2', 50, 25, 1);
    this.items.push(entry1);
    this.items.push(entry2);
  }

}
