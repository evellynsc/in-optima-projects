import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BudgetListComponent } from '../budget/list/budget-list.component';
import { BudgetDetailComponent } from '../budget/detail/budget-detail.component';

import { ProjectsComponent } from '../project/list/projects.component';
import { ProjectDetailComponent } from '../project/detail/project-detail.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    BudgetListComponent,
    BudgetDetailComponent,
    ProjectsComponent,
    ProjectDetailComponent
  ],
  exports: [
    BudgetListComponent,
    BudgetDetailComponent,
    ProjectsComponent,
    ProjectDetailComponent
  ]
})
export class BudgetModule { }
