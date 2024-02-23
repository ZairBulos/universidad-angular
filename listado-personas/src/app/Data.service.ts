import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person.model';

@Injectable()
export class DataService {
  baseUrl = '';

  constructor(private httpClient: HttpClient) {}

  getPeople(): Observable<Person[]> {
    const url = `${this.baseUrl}/datos.json`;

    return this.httpClient.get<Person[]>(url);
  }

  savePeople(people: Person[]): void {
    const url = `${this.baseUrl}/datos.json`;

    this.httpClient.put(url, people).subscribe(
      (res) => console.log(res),
      (error) => console.log(error)
    );
  }

  editPerson(id: number, person: Person): void {
    const url = `${this.baseUrl}/datos/${id}.json`;

    this.httpClient.put(url, person).subscribe(
      (res) => console.log(res),
      (error) => console.log(error)
    );
  }

  deletePerson(id: number): void {
    const url = `${this.baseUrl}/datos/${id}.json`;

    this.httpClient.delete(url).subscribe(
      (res) => console.log(res),
      (error) => console.log(error)
    );
  }
}
