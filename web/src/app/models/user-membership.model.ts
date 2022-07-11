import { BaseModel } from './base.model';
import { UserModel } from './user.model';
import { RoleModel } from './role.model';
import { OrganizationModel } from './organization.model';
import { OrganizationMembershipStatus } from '../utils/constants';

export interface UserMembershipModel extends BaseModel {
  user_id: UserModel['id'];
  organization_id: OrganizationModel['id'];
  status: keyof typeof OrganizationMembershipStatus;
  role_id: RoleModel
}
