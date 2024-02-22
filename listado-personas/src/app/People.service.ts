import { EventEmitter, Injectable } from '@angular/core';
import { LogginService } from './Loggin.service';
import { Person } from './person.model';

@Injectable()
export class PeopleService {
  people = [
    new Person('Zair', 'Bulos'),
    new Person('Karla', 'Lara'),
    new Person('Juan', 'Perez'),
  ];
  greet = new EventEmitter<string>();

  constructor(private logginService: LogginService) {}

  findPerson(id: number): Person {
    return this.people[id];
  }

  addPerson(person: Person): void {
    this.logginService.log(`Agregamos personas: ${person.name} ${person.lastName}`);
    this.people.push(person);
  }

  editPerson(id: number, person: Person): void {
    const editPerson = this.findPerson(id);
    editPerson.name = person.name;
    editPerson.lastName = person.lastName;
  }

  deletePerson(id: number): void {
    this.people.splice(id, 1);
  }
}
