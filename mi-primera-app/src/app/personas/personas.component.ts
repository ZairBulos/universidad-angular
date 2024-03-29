import { Component } from "@angular/core";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  message = '';
  showMessage = false;
  title = 'Técnico Universitario en Programación';

  addPerson(): void {
    this.showMessage = true;
    this.message = 'Persona agregada';
  }
}
