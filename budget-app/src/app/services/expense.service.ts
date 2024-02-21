import { Expense } from '../models/expense.model';

export class ExpenseService {
  expenses = [
    new Expense('Renta departamento', 900),
    new Expense('Ropa', 435.28),
  ];

  addExpense(expense: Expense): void {
    this.expenses.push(expense);
  }

  removeExpense(expense: Expense): void {
    const idx = this.expenses.indexOf(expense);
    this.expenses.splice(idx, 1);
  }
}
