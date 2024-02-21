import { Component } from '@angular/core';
import { IncomeService } from '../services/income.service';
import { ExpenseService } from '../services/expense.service';
import { Income } from '../models/income.model';
import { Expense } from '../models/expense.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  operationSelected = "incomeOption";
  descriptionInput: string;
  valueInput: number;

  constructor(private incomeService: IncomeService, private expenseService: ExpenseService) {}

  onChange(event: any): void {
    this.operationSelected = event.target.value;
  }

  onAdd(): void {
    if (this.operationSelected == "incomeOption") {
      const newIncome = new Income(this.descriptionInput, this.valueInput);
      this.incomeService.addIncome(newIncome);
    } else {
      const newExpense = new Expense(this.descriptionInput, this.valueInput);
      this.expenseService.addExpense(newExpense);
    }
  }
}
