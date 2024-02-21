import { Component, Input, OnInit } from '@angular/core';
import { Income } from '../models/income.model';
import { IncomeService } from '../services/income.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent {
  @Input() incomes: Income[];

  constructor(private incomeService: IncomeService) {}

  onRemove(income: Income): void {
    this.incomeService.removeIncome(income);
  }
}
