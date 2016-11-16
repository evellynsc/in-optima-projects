// OBS: When using router, remember to set href base in the index.html
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BudgetHomeRoutingModule } from './budget/budget-home-routing.module'

// import { BudgetDetailComponent } from '../budget/detail/budget-detail.component';
// import { ProjectDetailComponent } from '../project/detail/project-detail.component';
import { BudgetListComponent } from './budget/budget-list.component';

const routes: Routes = [
  { path: '', component: BudgetListComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // {
  //   path: 'budget/:bid',
  //   component: BudgetDetailComponent,
  //   // children: [
  //   //   { path: '', component: BudgetDetailComponent },
  //   //   { path: 'project/:pid', component: ProjectDetailComponent }
  //   // ]
  // },
  // { path: 'budget/:bid/project/:pid', component: ProjectDetailComponent }
];
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home',  component: BudgetComponent },
//   { path: 'detail/:id', component: HeroDetailComponent },
//   { path: 'heroes',     component: HeroesComponent }
// ];
//
@NgModule({
  imports: [ RouterModule.forRoot(routes),  ],
  exports: [ RouterModule,  ]
})
export class AppRoutingModule {}
