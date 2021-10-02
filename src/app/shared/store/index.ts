import { routerReducer, RouterState } from '@ngrx/router-store';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';

export interface AppState {
  router: RouterState;
}

function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state: AppState, action: Action): AppState => {
    console.log(state);
    console.log(action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = [logger];

export const ROOT_REDUCERS: ActionReducerMap<AppState, Action> = {
  router: routerReducer,
};
