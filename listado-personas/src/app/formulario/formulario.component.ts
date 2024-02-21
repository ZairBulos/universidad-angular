import { Component } from '@angular/core';
import { Person } from '../person.model';
import { PeopleService } from '../People.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  nameInput: string;
  lastNameInput: string;

  constructor(private peopleService: PeopleService) {
    this.peopleService.greet.subscribe((idx: string) => alert(`El índice es: ${idx}`));
  }

  onAddPerson(): void {
    const newPerson = new Person(this.nameInput, this.lastNameInput);
    this.peopleService.addPerson(newPerson);
  }
}
