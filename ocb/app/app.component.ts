import { Component } from '@angular/core';
import { BudgetListComponent } from './budget/list/budget-list.component';

@Component({
    selector: 'my-app',
    template: `<h1>OneClick Budget</h1>
    <a routerLink='/home' RouterLinkActive="active">Home</a>
    <router-outlet></router-outlet>
    `
})
export class AppComponent { }
