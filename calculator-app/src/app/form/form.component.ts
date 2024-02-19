import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  operandA: number;
  operandB: number;
  @Output() result = new EventEmitter<number>();

  add(): void {
    const addition = this.operandA + this.operandB;
    this.result.emit(addition);
  }
}
