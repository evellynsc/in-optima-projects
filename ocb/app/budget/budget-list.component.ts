import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import {ViewEncapsulation} from '@angular/core';

import { Budget } from './budget';
import { BudgetService } from './budget.service';


@Component({
  moduleId: module.id,
  selector: 'list-budgets',
  templateUrl: 'budget-list.component.html',
  styles: [`
    #new-budget {
      position: fixed;
      display: block;
      right: 0;
      bottom: 0;
      margin-right: 20px;
      margin-bottom: 15px;
      z-index: 900;
    },
    `
  ]
})
export class BudgetListComponent implements OnInit {
  budgets: Budget[] = [];
  selectedBudget: Budget;

  constructor(
    private router: Router,
    private budgetService: BudgetService
  )
  {
    // this.budgets = new Array<Budget>();
  }

  getBudgets(): void {
    this.budgetService.getBudgets().then(budgets => this.budgets = <Budget[]>budgets);
  }

  ngOnInit(): void {
    this.getBudgets();
  }

  gotoDetail(budget: Budget): void {
    let link = ['/budget', budget.id];
    this.router.navigate(link);
  }

  gotoNewBudget() : void {
    let link = ['/budget', 'new'];
    this.router.navigate(link);
  }
}
