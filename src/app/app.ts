import { Component, signal } from "@angular/core";
import { Person } from "../const/person";
import { Car } from "../const/car";
import { Personinput } from "../components/personinput/personinput";
import { Persontable } from "../components/persontable/persontable";
import { PersonWithCar } from "../const/personWithCar.const";

@Component({
  selector: "app-root",
  imports: [Personinput, Persontable],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected readonly title = signal("projetC-voiture");

  // Create an array of preset people
  people: Person[] = [
    new Person("Martin", 23),
    new Person("El Gringo", 47),
    new Person("Skibidi Mark", 3),
    new Person("Him.", -1),
    new Person("William Smith", 28),
  ];

  // Create an array of preset cars
  cars: Car[] = [
    new Car("Toyota", "Corolla"),
    new Car("Honda", "Civic"),
    new Car("Jeep", "Highlander"),
    new Car("Little Tykes", "Kids' Scooter"),
  ];

  peopleTable: PersonWithCar[] = [];

  inputHandler(personInput: PersonWithCar) {
    // Set the person associated with the input
    var person = this.people.indexOf(
      new Person(personInput.name, personInput.age),
    );

    // Set the car associated with the input
    var car = this.cars.indexOf(new Car(personInput.brand, personInput.model));

    // Add it to the peopleTable
    this.peopleTable.push(personInput);
  }

  onRemove(personToRemove: PersonWithCar) {
    // Deletes a person from the peopleTable when the Remove button is clicked on
    this.peopleTable.splice(this.peopleTable.indexOf(personToRemove), 1);
  }

  ngOnInit() {
    // Set the random values
    var person = Math.floor(Math.random() * this.people.length);
    var car = Math.floor(Math.random() * this.cars.length);

    // The number of random users
    const runs = 3;

    for (let i = 0; i < runs; i++) {
      // Add a random user with mix-and-match values
      this.peopleTable.push({
        name: this.people[person].name,
        age: this.people[person].age,
        brand: this.cars[car].brand,
        model: this.cars[car].model,
      });

      // Reset the variables randomness for the next run
      person = Math.floor(Math.random() * this.people.length);
      car = Math.floor(Math.random() * this.cars.length);
    }
  }
}
