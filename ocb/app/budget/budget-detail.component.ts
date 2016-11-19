import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';


import { Budget } from './budget';
import { Project } from '../project/project';
import { BudgetService } from './budget.service';
// import { getBudget } from '../mock-data';
// import { getProject } from '../mock-data';
import { ProjectListComponent } from '../project/project-list.component';

@Component({
  moduleId: module.id,
  selector: 'budget-detail',
  templateUrl: 'budget-detail.component.html'
})
export class BudgetDetailComponent implements OnInit {
  @Input()
  budget: Budget;
  // projects: Project[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private budgetService: BudgetService
  ) {}

  ngOnInit(): void {
    this.route.params.forEach( (params: Params) => {
      let budget_id = +params['bid'];
      this.budget = this.budgetService.getBudget(budget_id);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
