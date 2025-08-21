import { Component, Input, Output, EventEmitter } from "@angular/core";
import { PersonWithCar } from "../../const/personWithCar.const";

@Component({
  selector: "app-persontable",
  imports: [],
  templateUrl: "./persontable.html",
  styleUrl: "./persontable.scss",
})
export class Persontable {
  // Takes the peopletable from the parent and outputs the remove event
  @Input() peopleTable!: any;
  @Output() onRemove = new EventEmitter<PersonWithCar>();

  // Simple remove function emit lmao
  remove(personToRemove: PersonWithCar) {
    this.onRemove.emit(personToRemove);
  }
}
