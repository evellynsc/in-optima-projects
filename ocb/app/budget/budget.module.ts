import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdlModule } from 'angular2-mdl';
import { ReactiveFormsModule } from '@angular/forms';
import { MdlSelectModule } from '@angular2-mdl-ext/select';
import { MyDatePickerModule } from 'mydatepicker/dist/my-date-picker.module';

import { BudgetRoutingModule } from './budget-routing.module';
import { ProjectModule } from '../project/project.module';

import { BudgetListComponent } from './budget-list.component';
import { BudgetDetailComponent } from './budget-detail.component';
import { NewBudgetComponent } from './new-budget.component';
import { BudgetService } from './budget.service';

@NgModule({
  imports: [
    BrowserModule,
    BudgetRoutingModule,
    ProjectModule,
    MdlModule,
    ReactiveFormsModule,
    MdlSelectModule,
    MyDatePickerModule,
  ],
  declarations: [
    BudgetListComponent,
    BudgetDetailComponent,
    NewBudgetComponent,
  ],
  exports: [
    BudgetListComponent,
    BudgetDetailComponent,
    NewBudgetComponent,
  ],
  providers: [
    BudgetService
  ]
})
export class BudgetModule { }
