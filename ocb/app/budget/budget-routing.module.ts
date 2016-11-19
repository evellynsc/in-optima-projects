import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
// import { ProjectModule } from '../project/project.module';


import { BudgetListComponent }    from './budget-list.component';
import { BudgetDetailComponent }  from './budget-detail.component';
import { NewBudgetComponent } from './new-budget.component';
import { ProjectListComponent } from '../project/project-list.component';
import { ProjectDetailComponent } from '../project/project-detail.component';

@NgModule({
  imports: [
    // ProjectModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          { path: 'budgets',  component: BudgetListComponent },
          { path: 'budget/new',  component: NewBudgetComponent },
          {
            path: 'budget/:bid',
            component: BudgetDetailComponent,
            children: [
              { path: '', component: ProjectListComponent },
              { path: 'project/:pid', component: ProjectDetailComponent }
            ]
          }
        ]
      },

    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class BudgetRoutingModule { }
