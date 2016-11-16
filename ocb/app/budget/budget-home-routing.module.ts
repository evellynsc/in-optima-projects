import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectModule } from '../project/project.module';

import { BudgetHomeComponent } from './budget-home.component';
import { BudgetListComponent }    from './budget-list.component';
import { BudgetDetailComponent }  from './budget-detail.component';
import { ProjectDetailComponent } from '../project/project-detail.component';

@NgModule({
  imports: [
    ProjectModule,
    RouterModule.forChild([
      // { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: '',
        component: BudgetHomeComponent,
        children: [
          { path: 'budgets',  component: BudgetListComponent },
          {
            path: 'budget/:bid',
            children: [
              { path: '', component: BudgetDetailComponent },
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
export class BudgetHomeRoutingModule { }
