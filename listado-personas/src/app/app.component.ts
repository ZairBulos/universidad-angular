import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Listado de Personas';
  nameInput = '';
  lastNameInput = '';
  people: Person[] = [ new Person('Zair', 'Bulos'), new Person('Karla', 'Lara'), new Person('Juan', 'Perez') ];

  addPerson(): void {
    const newPerson = new Person(this.nameInput, this.lastNameInput);
    this.people.push(newPerson);   
  }
}
