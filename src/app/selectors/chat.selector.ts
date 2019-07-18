import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { ChatState } from '../reducers/chat.reducer';

export const selectChatState = createFeatureSelector<ChatState>('chat');

export const selectUserList = createSelector(
  selectChatState,
  state => state.userList
);

export const selectUser = createSelector(
    selectChatState,
    state => state.userList[state.selectedUser]
);