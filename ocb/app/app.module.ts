import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BudgetModule } from './modules/budget.module';
import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  imports:      [
    AppRoutingModule,
    BrowserModule,
    BudgetModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
