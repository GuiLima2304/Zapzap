import { Action } from '@ngrx/store';
import { GlobalActionTypes, GlobalActions } from '../actions/global.actions';


export interface GlobalState {
  changeStatus: boolean;
}

export const initialState: GlobalState = {
  changeStatus: false
};

export function Globalreducer(state = initialState, action: GlobalActions): GlobalState {
  switch (action.type) {
      case GlobalActionTypes.ChangeStatusGlobals:
          console.log(state);
      return {...state, changeStatus: !state.changeStatus };
    default:
      return state;
  }
}
