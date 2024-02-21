import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { FormComponent } from './form/form.component';
import { IncomeService } from './services/income.service';
import { ExpenseService } from './services/expense.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IncomeComponent,
    ExpenseComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    IncomeService,
    ExpenseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
