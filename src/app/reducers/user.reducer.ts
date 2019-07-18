import { Action } from '@ngrx/store';
import { UserActionTypes, UserActions } from '../actions/user.actions';
import { User } from '../models/User';


export interface UserState {
  userList: User[];
}

export const initialState: UserState = {
  userList: []
};

export function UserReducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
      case UserActionTypes.CreateUser:
      var newUser: User ={
        nome: action.payload.nome,
        foto: action.payload.foto,
        mensagens: []
      }
      console.log(newUser);

      state.userList.push(newUser);
      return {...state, userList: [...state.userList, newUser]};
    default:
      return state;
  }
}
