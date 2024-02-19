import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Aplicación de Calculadora';
  result: number;

  setResult(result: number): void {
    this.result = result;
  }
}
