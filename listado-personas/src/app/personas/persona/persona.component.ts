import { Component, Input } from '@angular/core';
import { Person } from '../../person.model';
import { PeopleService } from '../../People.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css',
})
export class PersonaComponent {
  @Input() person: Person;
  @Input() idx: number;

  constructor(private peopleService: PeopleService) {}
}
