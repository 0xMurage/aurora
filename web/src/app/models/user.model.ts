import { BaseModel } from './base.model';
import { RoleModel } from './role.model';
import { UserMembershipModel } from './user-membership.model';
import { OrganizationModel } from './organization.model';
import { UserAccountStatus } from '../utils/constants';

export interface UserModel extends BaseModel {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  status: keyof typeof UserAccountStatus;
  membership?: UserMembershipModel[];
  organizations?: OrganizationModel[];
  roles?: RoleModel[];
}
