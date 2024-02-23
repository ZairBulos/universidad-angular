import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Person } from './person.model';
import { DataService } from './Data.service';

@Injectable()
export class PeopleService {
  people: Person[] = [];

  constructor(private dataService: DataService) {}

  getPeople(): Observable<Person[]> {
    return this.dataService.getPeople();
  }

  setPeople(people: Person[]): void {
    this.people = people;
  }

  findPerson(id: number): Person {
    return this.people[id];
  }

  addPerson(person: Person): void {
    if (this.people == null) this.people = [];
    this.people.push(person);

    this.dataService.savePeople(this.people);
  }

  editPerson(id: number, person: Person): void {
    const editPerson = this.people[id];
    editPerson.name = person.name;
    editPerson.lastName = person.lastName;
    
    this.dataService.editPerson(id, person);
  }

  editPeople(): void {
    if (this.people !== null) this.dataService.savePeople(this.people);
  }

  deletePerson(id: number): void {
    this.people.splice(id, 1);

    this.dataService.deletePerson(id);
    this.editPeople(); // Se vuelve a guardar el array para regenerar indices en db
  }
}
