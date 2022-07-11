import { UserModel } from './user.model';

export interface BaseModel {
  id: string;

  created_by_id: UserModel['id'];
  created_by?: UserModel;

  updated_by_id: UserModel['id'];
  updated_by?: UserModel;

  created_at: string;
  updated_at: string;
}
