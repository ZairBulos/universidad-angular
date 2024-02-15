import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent { 
  name: string = 'Zair';
  lastName: string = 'Bulos';
  age: number = 22;
}
