import { RegularTicket } from "./regularTicket.js";
import { VipTicket } from "./vipTicket.js";

export class Airport {
  constructor(flight1, flight2, flight3) {
    this.flight1=flight1
    this.flight2=flight2
    this.flight3=flight3
    for (let index = 0; index < this.flight1.listTickets.length; index++) {
      if (index < this.flight1.maxPassengers * 0.9) {
        this.flight1.listTickets[index] = new RegularTicket(10);
      } else {
        this.flight1.listTickets[index] = new VipTicket(5);
      }
    }
    for (let index = 0; index < this.flight2.listTickets.length; index++) {
      if (index < this.flight2.maxPassengers * 0.9) {
        this.flight2.listTickets[index] = new RegularTicket(10);
      } else {
        this.flight2.listTickets[index] = new VipTicket(5);
      }
    }
    for (let index = 0; index < this.flight3.listTickets.length; index++) {
      if (index < this.flight3.maxPassengers * 0.9) {
        this.flight3.listTickets[index] = new RegularTicket(10);
      } else {
        this.flight3.listTickets[index] = new VipTicket(5);
      }
    }
  }
}
