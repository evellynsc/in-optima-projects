import { Component, OnInit } from '@angular/core';
import { UtilComponent } from './util.component';



@Component({
  moduleId: module.id,
  // providers: [ UtilService ],
  selector: 'my-app',
  // template: `<h1>OneClick Budget</h1>
  // <h6><a routerLink='' RouterLinkActive="active">Home</a></h6>
  // <router-outlet></router-outlet>
  // `
  templateUrl: 'app.component.html',
  styles: [`
    .app-content {
    }
    `
  ],
})
export class AppComponent implements OnInit {
  // items: FirebaseListObservable<any[]>;
  // item: FirebaseObjectObservable<any>;


  constructor() {
    // this.items = af.database.list('/budgets');
    // this.item = af.database.object('/budgets/0');
    // // add new object to the database
    // this.items.push({name: "newName", description: "newDescription"});
  }

  ngOnInit(): void {
    // this.util.addTestBudgets(1);
                    // .catch(this.handleError);
    // this.af.auth.login({
    //   provider: AuthProviders.Anonymous,
    //   method: AuthMethods.Anonymous,
    // });
  }
}
