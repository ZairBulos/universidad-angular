import { Component, ElementRef, ViewChild } from '@angular/core';
import { Person } from '../person.model';
import { PeopleService } from '../People.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  @ViewChild('nameRef') nameInput: ElementRef;
  @ViewChild('lastNameRef') lastNameInput: ElementRef;

  constructor(private peopleService: PeopleService) {
    this.peopleService.greet.subscribe((idx: string) => alert(`El índice es: ${idx}`));
  }

  onAddPerson(): void {
    const newPerson = new Person(this.nameInput.nativeElement.value, this.lastNameInput.nativeElement.value);
    this.peopleService.addPerson(newPerson);
  }
}
