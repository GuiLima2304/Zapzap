import { Action } from '@ngrx/store';
import { User } from '../models/User';

export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
  CreateUser = '[User] Create User'
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
}

export class CreateUser implements Action {
  readonly type = UserActionTypes.CreateUser;

  constructor(public payload: { nome:string, foto: string}) {}
}


export type UserActions = LoadUsers | CreateUser;
