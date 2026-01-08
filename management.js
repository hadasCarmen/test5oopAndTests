import { Airport } from "./classes/airport.js";
import { Flight } from "./classes/flight.js";
import { RegularPassenger } from "./classes/regularPassenger.js";
import { Student } from "./classes/studentPassengar.js";
function management() {
  const flight1 = new Flight("one", "arkia", "one", 50, 100, 150);
  const flight2 = new Flight("two", "elal", "two", 10, 15, 20);
  const flight3 = new Flight("three", "wizz", "three", 5, 50, 500);
  const airport = new Airport(flight1, flight2, flight3);

  const student = new Student("hadas", 213916075, 200, "lev");

  const passenger = new RegularPassenger(
    "elazar",
    315466219,
    150,
    "army",
    false
  );
  airport.flight1.buyTicket(student);
  airport.flight2.buyTicket(passenger);
}
management();
