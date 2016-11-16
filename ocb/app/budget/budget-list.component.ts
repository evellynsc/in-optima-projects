import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Budget } from './budget';
import { BUDGETS } from '../mock-data';


@Component({
    moduleId: module.id,
    selector: 'list-budgets',
    templateUrl: 'budget-list.component.html'
})
export class BudgetListComponent implements OnInit {
  budgets: Budget[];
  selectedBudget: Budget;

  constructor(
    private router: Router,
  ) {}

  getBudgets(): void {
    this.budgets = BUDGETS;
  }

  ngOnInit(): void {
    this.getBudgets();
  }

  gotoDetail(budget: Budget): void {
    let link = ['/budget', budget.id];
    this.router.navigate(link);
  }
}
