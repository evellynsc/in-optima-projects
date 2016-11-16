import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProjectDetailComponent } from './project-detail.component';
import { ProjectListComponent } from './project-list.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    ProjectDetailComponent,
    ProjectListComponent,
    // ProjectListComponent,
    // ProjectDetailComponent
  ],
  exports: [
    ProjectDetailComponent,
    ProjectListComponent,
    // ProjectListComponent,
    // ProjectDetailComponent
  ]
})
export class ProjectModule { }
