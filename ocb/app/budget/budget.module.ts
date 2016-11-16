import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BudgetHomeRoutingModule } from './budget-home-routing.module';

import { BudgetHomeComponent } from './budget-home.component';
import { BudgetListComponent } from './budget-list.component';
import { BudgetDetailComponent } from './budget-detail.component';


// import { ProjectListComponent } from '../project/project-list.component';
// import { ProjectDetailComponent } from '../project/project-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    BudgetHomeRoutingModule
  ],
  declarations: [
    BudgetListComponent,
    BudgetDetailComponent,
    BudgetHomeComponent
    // ProjectListComponent,
    // ProjectDetailComponent
  ],
  exports: [
    BudgetListComponent,
    BudgetDetailComponent,
    BudgetHomeComponent
    // ProjectListComponent,
    // ProjectDetailComponent
  ]
})
export class BudgetModule { }
