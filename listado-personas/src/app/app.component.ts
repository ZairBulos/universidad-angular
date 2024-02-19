import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Listado de Personas';
  people: Person[] = [ new Person('Zair', 'Bulos'), new Person('Karla', 'Lara'), new Person('Juan', 'Perez') ];

  addedPerson(person: Person): void {
    this.people.push(person);
  }

}
