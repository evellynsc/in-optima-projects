// OBS: When using router, remember to set href base in the index.html
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetListComponent } from './budget/budget-list.component';
import { UtilComponent } from './util.component';

const routes: Routes = [
  { path: 'home', component: BudgetListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'addBudgets', component: UtilComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes),  ],
  exports: [ RouterModule,  ]
})
export class AppRoutingModule {}
