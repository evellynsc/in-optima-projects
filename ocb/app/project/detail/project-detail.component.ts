import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Project } from '../model/project';
import { Item } from '../../item/model/item';
import { getProject } from '../../mock-data';
import { getItem } from '../../mock-data';


@Component({
  moduleId: module.id,
  selector: 'project-detail',
  templateUrl: 'project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {
  @Input()
  project: Project;
  items: Item[] = [];

  constructor(
    private route: ActivatedRoute
  ){ }

  ngOnInit(): void {
    this.route.params.forEach( (params: Params) => {
      let proj_id = +params['pid'];
      this.project = getProject(proj_id);
    });
    for (let item_id of this.project.item_ids) {
      this.items.push(getItem(item_id));
    }
  }
}
