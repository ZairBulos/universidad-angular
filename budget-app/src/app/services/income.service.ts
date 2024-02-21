import { Income } from '../models/income.model';

export class IncomeService {
  incomes = [
    new Income('Salario', 4000), 
    new Income('Venta coche', 500)
  ];

  addIncome(income: Income): void {
    this.incomes.push(income);
  }

  removeIncome(income: Income): void {
    const idx = this.incomes.indexOf(income);
    this.incomes.splice(idx, 1);
  }
}
