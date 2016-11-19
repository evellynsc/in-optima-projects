import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { BUDGETS } from '../mock-data';
import { Budget } from './budget';

@Injectable()
export class BudgetService {
  constructor(private http: Http){}
// tutorial for promises http://www.datchley.name/es6-promises/
  getBudgets() : Promise<Budget[]> {
    return Promise.resolve(BUDGETS);
  }

  getBudget(id: number): Budget {
    let budget: Budget = null;
    for (let b of BUDGETS) {
      if (b.id === id) {
        budget = b;
      }
    }
    return budget;
  }

}
