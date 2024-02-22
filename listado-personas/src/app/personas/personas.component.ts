import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person.model';
import { PeopleService } from '../People.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css',
})
export class PersonasComponent implements OnInit {
  people: Person[] = [];

  constructor(private peopleService: PeopleService, private router: Router) {}

  ngOnInit(): void {
    this.people = this.peopleService.people;
  }

  onAdd(): void {
    this.router.navigate(['personas/agregar']);
  }
}
