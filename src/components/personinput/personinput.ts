import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import type { Car } from "../../const/car";
import type { Person } from "../../const/person";
import type { PersonWithCar } from "../../const/personWithCar.const";

@Component({
  selector: "app-personinput",
  imports: [FormsModule, CommonModule],
  templateUrl: "./personinput.html",
  styleUrl: "./personinput.scss",
})
export class Personinput {
  // These are ngModels, they are tethered to the select values
  selectedPerson: string = "";
  selectedCar: string = "";

  // Set some default values for the final values
  splicedName: string = "";
  splicedAge: number = -999;
  splicedBrand: string = "";
  splicedModel: string = "";

  // We output a submit event and we take in the people and the cars array
  @Output() submitPerson = new EventEmitter<PersonWithCar>();
  @Input() people!: Person[];
  @Input() cars!: Car[];

  // The splice functions splice the values from the select to be able to identify the PersonWithCar
  splicePeople(personString: string): unknown[] {
    return personString.split("|");
  }

  spliceCars(carString: string): string[] {
    return carString.split("|");
  }

  // These wrappers just set the variables
  personSpliceWrapper(personProperties: any[]) {
    this.splicedName = personProperties[0];
    this.splicedAge = personProperties[1];
  }

  carSpliceWrapper(carProperties: string[]) {
    this.splicedBrand = carProperties[0];
    this.splicedModel = carProperties[1];
  }

  // This is the final wrapper, it runs the other wrappers and emits a PersonWithCar after making sure the user selected a value
  selectWrapper() {
    if (!this.selectedPerson) {
      return;
    }
    if (!this.selectedCar) {
      return;
    }
    this.personSpliceWrapper(this.splicePeople(this.selectedPerson));
    this.carSpliceWrapper(this.spliceCars(this.selectedCar));
    this.submitPerson.emit({
      name: this.splicedName,
      age: this.splicedAge,
      brand: this.splicedBrand,
      model: this.splicedModel,
    });
  }
}
