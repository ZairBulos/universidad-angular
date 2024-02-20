import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';
import { LogginService } from './Loggin.service';
import { PeopleService } from './People.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Listado de Personas';
  people: Person[] = [];

  constructor(private logginService: LogginService, private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.people = this.peopleService.people;
  }
}
