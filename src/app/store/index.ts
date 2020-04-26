import { ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';
import * as routerReducer from '@ngrx/router-store';
import { MyRouterState } from './router.helper';

export interface State {
  router: routerReducer.RouterReducerState<MyRouterState>;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer.routerReducer
};

function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any) => {
    console.log('state : ', state);
    console.log('action : ', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = [
  logger
];
