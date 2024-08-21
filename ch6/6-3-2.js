export class Order {
  constructor(aRecord) {
    this._data = aRecord;
  }

  get quantity() {
    return this._data.quantity;
  }
  get itemPrice() {
    return this._data.itemPrice;
  }

  get price() {
    const basePrice = this._data.quantity * this._data.itemPrice;
    const discount = Math.max(0, this._data.quantity - 500) * this._data.itemPrice * 0.05;
    const shipping = Math.min(this._data.quantity * this._data.itemPrice * 0.1, 100);
    return basePrice - discount + shipping;
  }
}
