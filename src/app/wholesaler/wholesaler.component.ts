import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Item } from '../item';


@Component({
  selector: 'app-wholesaler',
  templateUrl: './wholesaler.component.html',
  styleUrls: ['./wholesaler.component.css']
})
export class WholesalerComponent implements OnInit {

  inventoryItems = [];
  selectedItem: Item;
  customerItems = [];
  billTotal = 0;
  paidAmount = 0;
  remainingAmount = 0;
  customerName: any;
  paymentMethods = ['Cash', 'Credit']
  selectedPayment = 'Cash'

  constructor(
    private fb: FormBuilder,
  ) { }

  itemForm = this.fb.group({
    quantity: ['', [ Validators.required, Validators.pattern ] ]
  });

  get itemFormControls() {
    return this.itemForm.controls;
  }

  ngOnInit() {
    let entry1 = new Item('Item1', 10, 5, 1, 100);
    let entry2 = new Item('Item2', 50, 25, 1, 100);
    this.inventoryItems.push(entry1);
    this.inventoryItems.push(entry2);
  }

  public addItem()
  {
    let item = new Item(this.selectedItem.itemName, this.selectedItem.retailerPrice, this.selectedItem.wholesalerPrice, this.itemForm.value['quantity'], 1);
    this.customerItems.push(item);
    this.billTotal +=  this.selectedItem.wholesalerPrice * this.itemForm.value['quantity'];
  }

  remove(item){
    for(var i=0; i< this.customerItems.length; i++)
    {
      if(this.customerItems[i].itemName == item.itemName
          && this.customerItems[i].quantity == item.quantity)
      {
        this.billTotal -=  this.customerItems[i].wholesalerPrice * this.customerItems[i].quantity;
        this.customerItems.splice(i,1);
      }
    }
  }

  placeOrder()
  {
    console.log(this.customerName);
  }

  changeRemainingAmount(){
    this.remainingAmount = this.billTotal - this.paidAmount;
  }

  changePaymentMethod(){
    document.getElementById("creditWholesalerPayment").style.visibility = 'hidden';
    if(this.selectedPayment == 'Credit'){
      document.getElementById("creditWholesalerPayment").style.visibility = 'visible';
      this.remainingAmount = this.billTotal - this.paidAmount;
    }
  }

}
