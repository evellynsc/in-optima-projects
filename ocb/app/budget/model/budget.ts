import { Project } from '../../project/model/project';

export class Budget {
  id: number;
  name: string;
  description: string;
  deadline: Date;
  project_ids: number[];
  proposal_ids: number[];
}
