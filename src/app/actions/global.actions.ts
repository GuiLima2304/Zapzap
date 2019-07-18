import { Action } from '@ngrx/store';

export enum GlobalActionTypes {
  LoadGlobals = '[Global] Load Globals',
  ChangeStatusGlobals = '[Global] Change Status Globals'
}

export class LoadGlobals implements Action {
  readonly type = GlobalActionTypes.LoadGlobals;
}

export class ChangeStatusGlobals implements Action {
  readonly type = GlobalActionTypes.ChangeStatusGlobals;

  constructor() {}
}


export type GlobalActions = LoadGlobals | ChangeStatusGlobals;
