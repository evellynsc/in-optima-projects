import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { UtilService } from './util.service';
import { Budget } from './budget/budget';


@Component({
  moduleId: module.id,
  template: `
    <h5>AddBudgets</h5>
    <li class="text" *ngFor="let d of description">
      {{d}}
    </li>
    <span>{{name}}</span>
    <br/>
    <button mdl-button mdl-button-type="raised" (click)="addTestBudgets()">Adicionar budgets</button>
  `,
  // selector: 'util',
})
export class UtilComponent implements OnInit {
  description: Array<string>;
  errorMessage1 : any;
  errorMessage2 : any;
  name: string;
  budgets: FirebaseListObservable<Budget[]>;
  // item: FirebaseObjectObservable<any>;

  constructor(
    private utilService : UtilService,
    private af: AngularFire
  ){}

  ngOnInit() {
    this.utilService.getLoremIpsum().subscribe(d => this.description = d, error => this.errorMessage1 = <any>error);
    this.budgets = this.af.database.list('/budgets');
    this.name = 'budget_' +this.utilService.getRandomString(8);
  }

  addTestBudgets(): void {
    // for (let i = 0; i < n; ++i)
    // {

      // this.budgets = this.af.database.list('/budgets');
      // this.utilService.getLoremIpsum().subscribe(d => this.description = d, error => this.errorMessage = <any>error);
      // this.item = af.database.object('/budgets/0');
      // add new object to the database
      this.budgets.push({name: this.name, description: this.description[0]});

    // }

  }
}
