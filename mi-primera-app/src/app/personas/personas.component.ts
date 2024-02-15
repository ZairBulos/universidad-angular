import { Component } from "@angular/core";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  disabledBtn = false;
  message = '';
  title = 'Técnico Universitario en Programación';

  addPerson() {
    this.message = 'Persona agregada'
  }
}
