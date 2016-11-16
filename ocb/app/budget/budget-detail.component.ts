import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Budget } from './budget';
import { Project } from '../project/project';
import { getBudget } from '../mock-data';
import { getProject } from '../mock-data';

@Component({
  moduleId: module.id,
  selector: 'budget-detail',
  templateUrl: 'budget-detail.component.html'
})
export class BudgetDetailComponent implements OnInit {
  @Input()
  budget: Budget;
  projects: Project[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.params.forEach( (params: Params) => {
      let budget_id = +params['bid'];
      this.budget = getBudget(budget_id);
    });
    for (let proj_id of this.budget.project_ids) {
      this.projects.push(getProject(proj_id));
    }
  }

  gotoProjDetail(project: Project): void {
    let link = ['/budget/', this.budget.id, 'project', project.id];
    console.log(link);
    this.router.navigate(link);
  }
}
