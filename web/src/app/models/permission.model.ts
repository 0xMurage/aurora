import {
  PermissionAction,
  PermissionLevel,
  PermissionResource,
  AnyValueOf
} from '../utils/constants'

type PermissionResourceModel = AnyValueOf<typeof PermissionResource>
type PermissionActionModel = AnyValueOf<typeof PermissionAction>

type PermissionLevelModel = AnyValueOf<typeof PermissionLevel>;

export interface PermissionModel {
  id: string
  name: `${PermissionLevelModel}.${PermissionResourceModel}.${PermissionActionModel}`
  group: string
  description: string
  level: PermissionLevelModel
}
