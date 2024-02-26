import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person.model';
import { LoginService } from './Login.service';

@Injectable()
export class DataService {
  baseUrl = '';

  constructor(private httpClient: HttpClient, private loginService: LoginService) {}

  getPeople(): Observable<Person[]> {
    const token = this.loginService.getIdToken();
    const url = `${this.baseUrl}/datos.json?auth=${token}`;

    return this.httpClient.get<Person[]>(url);
  }

  savePeople(people: Person[]): void {
    const token = this.loginService.getIdToken();
    const url = `${this.baseUrl}/datos.json?auth=${token}`;

    this.httpClient.put(url, people).subscribe(
      (res) => console.log(res),
      (error) => console.log(error)
    );
  }

  editPerson(id: number, person: Person): void {
    const token = this.loginService.getIdToken();
    const url = `${this.baseUrl}/datos/${id}.json?auth=${token}`;

    this.httpClient.put(url, person).subscribe(
      (res) => console.log(res),
      (error) => console.log(error)
    );
  }

  deletePerson(id: number): void {
    const token = this.loginService.getIdToken();
    const url = `${this.baseUrl}/datos/${id}.json?auth=${token}`;

    this.httpClient.delete(url).subscribe(
      (res) => console.log(res),
      (error) => console.log(error)
    );
  }
}
