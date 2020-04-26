import { ActionReducerMap } from '@ngrx/store';
import * as routerReducer from '@ngrx/router-store';
import { MyRouterState } from './router.helper';

export interface State {
  router: routerReducer.RouterReducerState<MyRouterState>;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer.routerReducer
};

