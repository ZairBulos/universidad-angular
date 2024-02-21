import { Component, OnInit } from '@angular/core';
import { IncomeService } from './services/income.service';
import { ExpenseService } from './services/expense.service';
import { Income } from './models/income.model';
import { Expense } from './models/expense.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  incomes: Income[] = [];
  expenses: Expense[] = [];

  constructor(private incomeService: IncomeService, private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.incomes = this.incomeService.incomes;
    this.expenses = this.expenseService.expenses;
  }

  getIncomeTotal(): number {
    let total = 0;
    this.incomes.forEach(income => {
      total += income.value;
    });

    return total;
  }

  getExpenseTotal(): number {
    let total = 0;
    this.expenses.forEach(expense => {
      total += expense.value;
    });

    return total;
  }

  getPercentageTotal(): number {
    return this.getExpenseTotal() / this.getIncomeTotal();
  }

  getBudgetTotal(): number {
    return this.getIncomeTotal() - this.getExpenseTotal();
  }
}
