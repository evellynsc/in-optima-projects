import { Item } from './item/model/item';
import { Project } from './project/model/project';
import { Budget } from './budget/model/budget';

export const ITEMS: Item[] = [
  { id: 1, description: 'Item 1' },
  { id: 2, description: 'Item 2' },
  { id: 3, description: 'Item 3' },
  { id: 4, description: 'Item 4' },
  { id: 5, description: 'Item 5' },
  { id: 6, description: 'Item 6' },
  { id: 7, description: 'Item 7' },
  { id: 8, description: 'Item 8' },
  { id: 9, description: 'Item 9' },
  { id: 10, description: 'Item 10' }
];

export const PROJECTS: Project[] = [
  { id: 1, name: 'Project 1', description: 'Project Description 1', item_ids: [1,2,3,4,5]},
  { id: 2, name: 'Project 2', description: 'Project Description 2', item_ids: [2,6,7,8,10]},
  { id: 3, name: 'Project 3', description: 'Project Description 3', item_ids: [2,4,5]},
  { id: 4, name: 'Project 4', description: 'Project Description 4', item_ids: [6,8,9]}
];

export const BUDGETS: Budget[] = [
  { id: 1, name: 'Budget 1', description: 'Budget description 1', deadline: new Date('1968-11-16T00:00:00'), project_ids: [1,3], proposal_ids: []},
  { id: 2, name: 'Budget 2', description: 'Budget description 2', deadline: new Date('1989-11-16T00:00:00'), project_ids: [2,4], proposal_ids: []},
];

export function getBudget(id: number): Budget {
  for (let budget of BUDGETS) {
    if (budget.id === id) {
      return budget;
    }
  }
}

export function getProject(id: number): Project {
  for (let project of PROJECTS) {
    if (project.id == id) {
      return project;
    }
  }
}

export function getItem(id: number): Item {
  for (let item of ITEMS) {
    if (item.id == id) {
      return item;
    }
  }
}
