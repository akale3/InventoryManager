import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Item } from '../item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  items: Array<any>;
  selectedItem: Item;
  alertMessage: String;
  showAlert: boolean;
  searchKeyWord: string;

  constructor(
      private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.items = [];
    let entry1 = new Item('Item1', 10, 5, 1, 4);
    let entry2 = new Item('Item2', 50, 25, 1, 100);
    let entry3 = new Item('Item3', 50, 25, 1, 50);
    let entry4 = new Item('Item4', 50, 25, 1, 10);
    let entry5 = new Item('Item5', 50, 25, 1, 0);
    let entry6 = new Item('Item6', 50, 25, 1, 9);
    let entry7 = new Item('Item7', 50, 25, 1, 0);
    this.items.push(entry1);
    this.items.push(entry2);
    this.items.push(entry3);
    this.items.push(entry4);
    this.items.push(entry5);
    this.items.push(entry6);
    this.items.push(entry7);
    this.items.push(entry7);
    this.items.push(entry7);
    this.showAlert = false;
  }

  addItemForm = this.fb.group({
    itemName: ['', [ Validators.required, Validators.pattern ] ],
    availableQuantity: ['', [ Validators.required, Validators.pattern ] ],
    retailerPrice: ['', [ Validators.required, Validators.pattern ] ],
    wholesalerPrice: ['', [ Validators.required, Validators.pattern ] ]
  });

  get itemFormControls() {
    return this.addItemForm.controls;
  }

  updateItemForm = this.fb.group({
    quantity: ['', [ Validators.required, Validators.pattern ] ]
  });

  get updateItemFormControls() {
    return this.updateItemForm.controls;
  }

  addItem() {

    for (let i=0; i<this.items.length;i++){
      if(this.items[i].itemName == this.addItemForm.value['itemName']){
        this.showAlert = true;
        this.alertMessage = "This item already exist in Inventory please update quantity.";
        return;
      }
    }

    let item = new Item(
      this.addItemForm.value['itemName'],
      this.addItemForm.value['retailerPrice'],
      this.addItemForm.value['wholesalerPrice'],
      1,
      this.addItemForm.value['availableQuantity']
    );
    this.items.push(item);
  }

  updateQuantity(operationType){
    console.log(operationType);
    console.log(this.updateItemForm.value['quantity']);
    console.log(this.selectedItem);

  }

  hideAlert(){
    this.showAlert=false;
  }
}
