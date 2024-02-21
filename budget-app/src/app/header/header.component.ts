import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() total: number;
  @Input() incomeTotal: number;
  @Input() expenseTotal: number;
  @Input() percentageTotal: number;
}
