export type AnyValueOf<T> = T[keyof T]

export const UserAccountStatus = {
  INVITED: 'Activation Pending',
  ACTIVE: 'Active',
  SUSPENDED: 'Suspended'
} as const

export const PermissionLevel = {
  root: 'root',
  team: 'team'
} as const

export const PermissionAction = {
  view: 'view',
  create: 'create',
  edit: 'edit',
  delete: 'delete'
} as const

export const PermissionResource = {
  users: 'users'
} as const


export const OrganizationMembershipStatus ={ ...UserAccountStatus} as const;
