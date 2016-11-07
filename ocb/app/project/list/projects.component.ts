import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


import { Budget } from '../../budget/model/budget';
import { Project } from '../model/project';
import { getBudget } from '../../mock-data';
import { getProject } from '../../mock-data';

@Component({
  moduleId: module.id,
  selector: 'list-projects',
  templateUrl: 'projects.component.html'
})
export class ProjectsComponent implements OnInit {
  selectedBudgetId: number;
  projects: Project[] = [];

  constructor(
    private currentRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    let budget: Budget;
    this.currentRoute.params.forEach( (params: Params) => {
      let budget_id = this.selectedBudgetId = +params['bid'];
      budget = getBudget(budget_id);
    });
    for (let proj_id of budget.project_ids) {
      this.projects.push(getProject(proj_id));
    }
  }

  gotoProjDetail(project: Project): void {
    let link = ['/budget', this.selectedBudgetId, 'project', project.id];
    console.log(link);
    this.router.navigate(link);
  }
}
