import { Component, Input } from '@angular/core';
import { Expense } from '../models/expense.model';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent {
  @Input() expenses: Expense[];
  @Input() budgetTotal: number;

  constructor(private expenseService: ExpenseService) {}

  onRemove(expense: Expense): void {
    this.expenseService.removeExpense(expense);
  }

  getPercentage(expense: Expense): number {
    return expense.value / this.budgetTotal;
  }
}
