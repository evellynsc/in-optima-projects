export class Budget {
  id: number;
  name: string;
  description: string;
  deadline: Date;
  lastModification: Date;
  creation: Date;
  project_ids: number[];
  proposal_ids: number[];
}
