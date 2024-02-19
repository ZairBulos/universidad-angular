import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  @ViewChild('nameRef') nameInput: ElementRef;
  @ViewChild('lastNameRef') lastNameInput: ElementRef;
  @Output() addedPerson = new EventEmitter<Person>();

  addPerson(): void {
    const newPerson = new Person(
      this.nameInput.nativeElement.value, 
      this.lastNameInput.nativeElement.value
    );
    this.addedPerson.emit(newPerson);
  }
}
