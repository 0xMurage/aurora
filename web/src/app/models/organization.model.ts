import { BaseModel } from './base.model';

export interface OrganizationModel extends BaseModel {
  id: string;
  name: string;
  is_readonly: boolean // true for 'builtin' and false for 'custom';
  is_root: true | null;
}
