import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BudgetModule } from './budget/budget.module';
// import { ProjectModule } from './project/project.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  imports:      [
    AppRoutingModule,
    BrowserModule,
    BudgetModule,
    // ProjectModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
