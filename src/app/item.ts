export class Item {

  itemName: string;
  retailerPrice: number;
  wholesalerPrice: number;
  quantity: number;

  constructor(
    itemName,
    retailerPrice,
    wholesalerPrice,
    quantity
  )
  {
    this.itemName = itemName;
    this.retailerPrice = retailerPrice;
    this.wholesalerPrice = wholesalerPrice;
    this.quantity = quantity;
  }

}
