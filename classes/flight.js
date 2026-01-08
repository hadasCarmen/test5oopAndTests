import { RegularTicket } from "./regularTicket.js";
import { Student } from "./studentPassengar.js";
import { VipTicket } from "./vipTicket.js";

export class Flight {
  constructor(
    flightName,
    airline,
    flightNumber,
    maxPassengers,
    priceRegularTicket,
    priceVipTicket
  ) {
    this.flightName = flightName;
    this.airline = airline;
    this.flightNumber = flightNumber;
    this.maxPassengers = maxPassengers;
    this.flightName = flightName;
    this.priceRegularTicket = priceRegularTicket;
    this.priceVipTicket = priceVipTicket;
    this.listTickets = new Array(maxPassengers);
  }
  buyTicket(passenger) {
    let founfRegularTicket = false;
    let count = 1;

    if (passenger instanceof Student) {
      while (!founfRegularTicket) {
        const location = this.maxPassengers - count;
        count++;
        const ticket = this.listTickets[location];
        if (ticket.ownerName === null) {
          if (ticket instanceof VipTicket) {
            founfRegularTicket = true;
            if (passenger.amount - ticket.price >= 0) {
              this.listTickets[location].ownerName = passenger.name;
              passenger.amount -= ticket.price;
            } else {
              console.log("you dont have enouf money");
            }
          }
        }
      }
    } else {
      while (!founfRegularTicket) {
        const location = this.maxPassengers - count;
        count++;

        const ticket = this.listTickets[location];

        if (ticket.ownerName === null && ticket instanceof RegularTicket) {
          founfRegularTicket = true;
          if (passenger.memerOfEmployee) {
            if (passenger.amount - ticket.price * 0.8 >= 0) {
              this.listTickets[location].ownerName = passenger.name;
              passenger.amount -= ticket.price * 0.8;
            } else {
              console.log("you dont have enouf money");
            }
          } else {
            if (passenger.amount - ticket.price >= 0) {
              this.listTickets[location].ownerName = passenger.name;
              passenger.amount -= ticket.price;
            } else {
              console.log("you dont have enouf money");
            }
          }
        }
      }
    }
  }
}
