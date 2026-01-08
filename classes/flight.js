import { RegularTicket } from "./regularTicket.js";
import { Student } from "./studentPassengar.js";
import { VipTicket } from "./vipTicket.js";
import { Baggage } from "./baggage.js";
export class Flight {
  constructor(
    flightName,
    airline,
    flightNumber,
    maxPassengers,
    priceRegularTicket,
    priceVipTicket,
    maxWeight
  ) {
    this.flightName = flightName;
    this.airline = airline;
    this.flightNumber = flightNumber;
    this.maxPassengers = maxPassengers;
    this.flightName = flightName;
    this.priceRegularTicket = priceRegularTicket;
    this.priceVipTicket = priceVipTicket;
    this.listTickets = new Array(maxPassengers);
    this.maxWeight = maxWeight;
  }
  addBagg(baggage) {
    if (this.maxWeight - baggage.weight < 0) {
      return false;
    } else {
      this.maxWeight - baggage.weight;
    }
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
              return false;
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
              return false;
            }
          } else {
            if (passenger.amount - ticket.price >= 0) {
              this.listTickets[location].ownerName = passenger.name;
              passenger.amount -= ticket.price;
            } else {
              console.log("you dont have enouf money");
              return false;
            }
          }
        }
      }
    }
  }
}
