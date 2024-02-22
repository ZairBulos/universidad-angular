import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../../person.model';
import { PeopleService } from '../../People.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent implements OnInit {
  id: number;
  isEdit: boolean;
  nameInput: string;
  lastNameInput: string;

  constructor(
    private peopleService: PeopleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isEdit = +this.route.snapshot.queryParams['editMode'] === 1 ? true : false;

    if (this.isEdit) {
      const person = this.peopleService.findPerson(this.id);

      this.nameInput = person.name;
      this.lastNameInput = person.lastName;
    }
  }

  onSave(): void {
    const person = new Person(this.nameInput, this.lastNameInput);

    if (this.isEdit) {
      this.peopleService.editPerson(this.id, person);
    } else {
      this.peopleService.addPerson(person);
    }

    this.router.navigate(['personas']);
  }

  onDelete(): void {
    if (this.isEdit) {
      this.peopleService.deletePerson(this.id);
    }

    this.router.navigate(['personas']);
  }
}
