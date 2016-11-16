import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { Project } from './project';
import { getProjectsByBudget } from '../mock-data';

// TODO: verificar se esse componente vai listar os projetos de um orçamento ou listar somente os modelos de projeto!!
@Component({
  moduleId: module.id,
  selector: 'project-list',
  templateUrl: 'project-list.component.html'
})
export class ProjectListComponent implements OnInit {
  selectedBudgetId: number;
  projects: Project[] = [];

  constructor(
    private currentRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.currentRoute.params.forEach( (params: Params) => {
      let budget_id = this.selectedBudgetId = +params['bid'];
      this.projects = getProjectsByBudget(budget_id);
    });
  }

  gotoProjDetail(project: Project): void {
    let link = ['/budget', this.selectedBudgetId, 'project', project.id];
    console.log(link);
    this.router.navigate(link);
  }
}
