import { BaseModel } from './base.model';
import { PermissionModel } from './permission.model';
import { OrganizationModel } from './organization.model';

export interface RoleModel extends BaseModel {
  name: string;
  description: string;
  is_readonly: boolean;
  organization_id: OrganizationModel['id'];
  organization?: OrganizationModel;
  permissions?: PermissionModel[];
}
