import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GlobalState } from '../reducers/global.reducer';

export const selectGlobalState = createFeatureSelector<GlobalState>('global');

export const selectChangeStatus = createSelector(
    selectGlobalState,
    state => state.changeStatus
);