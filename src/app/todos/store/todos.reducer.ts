import { Todo } from "../../todo.model";
import * as todosAction from "./todos.actions";

export interface TodoState {
  datas: {
    [todoId: string]: Todo
  };
  loading: boolean;
  loaded: boolean;
  error: any;
}

const initialState = {
  datas: null,
  loading: false,
  loaded: false,
  error: null,
};

export function todosReducer(state: TodoState = initialState, action: todosAction.TodosActionType): TodoState {
  switch (action.type) {
    case todosAction.FETCH_TODO: {
      return {
        ...state,
        loading: true,
      };
    }
    case todosAction.FETCH_TODO_SUCCESS: {
      return {
        ...state,
        datas: action.payload.reduce((acc, t) => {
          acc[t.id] = t;
          return acc;
        }, { ...state.datas }),
        loading: false,
        loaded: true,
        error: null,
      };
    }
    case todosAction.FETCH_TODO_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case todosAction.TODO_CREATE:
      return {
        ...state,
        datas: { ...state.datas, [Object.keys(state.datas).length]: action.payload },
      };
    case todosAction.TODO_DELETE:
      const remove = { ...state.datas };
      delete remove[action.payload];
      return {
        ...state,
        datas: remove,
      };
    case todosAction.TODO_TOGGLE:
      return {
        ...state,
        datas: {
          ...state.datas,
          [action.payload]: {
            ...state.datas[action.payload],
            done: !state.datas[action.payload].done
          }
        },
      };
    default:
      return state;
  }
}
