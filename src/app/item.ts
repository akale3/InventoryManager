export class Item {

  itemName: string;
  retailerPrice: number;
  wholesalerPrice: number;
  quantity: number;
  availableQuantity: number;

  constructor(
    itemName,
    retailerPrice,
    wholesalerPrice,
    quantity,
    availableQuantity
  )
  {
    this.itemName = itemName;
    this.retailerPrice = retailerPrice;
    this.wholesalerPrice = wholesalerPrice;
    this.quantity = quantity;
    this.availableQuantity = availableQuantity;
  }

}
