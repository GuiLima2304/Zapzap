import { UserState } from '../reducers/user.reducer';
import { createFeatureSelector } from '@ngrx/store';

export const selectUserState = createFeatureSelector<UserState>('user');
