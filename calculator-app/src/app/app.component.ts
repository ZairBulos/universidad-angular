import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aplicación de Calculadora';
  operandA: number = 0;
  operandB: number = 0;
  result: number = 0;

  add(): void {
    this.result = this.operandA + this.operandB;
  }
}
