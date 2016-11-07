import { Item } from '../../item/model/item';

export class Project {
  id: number;
  name: string;
  description: string;
  item_ids: number[];
}
