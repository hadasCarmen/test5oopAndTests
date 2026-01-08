export class RegularTicket {
  constructor(price, ownerName = null) {
    this.numberTickes = Math.floor(Math.random() * 100) + 1;
    this.price = price;
    this.ownerName = ownerName;
  }
}
