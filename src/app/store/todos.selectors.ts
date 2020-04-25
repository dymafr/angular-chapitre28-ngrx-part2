import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todos.reducer';
import * as routerReducer from '@ngrx/router-store';
import { MyRouterState } from './router.helper';
import { Todo } from '../todo.model';


export const todosSelector = createFeatureSelector<TodoState>('todos');
export const routerSelector = createFeatureSelector<routerReducer.RouterReducerState<MyRouterState>>('router');

export const myRouterStateSelector = createSelector(
  routerSelector,
  (routerState) => {
    return routerState.state;
  }
);

export const todoListSelector = createSelector(
  todosSelector,
  (todosState: TodoState) => {
    return todosState.datas;
  }
);

export const todoListArraySelector = createSelector(
  todosSelector,
  (todoState: TodoState) => {
    if (todoState.datas) {
      return Object.keys(todoState.datas).map(idTodo => todoState.datas[idTodo]);
    } else {
      return null;
    }
  }
);

export const selectedTodoSelector = createSelector(
  todoListSelector,
  myRouterStateSelector,
  (todos: { [todoId: string]: Todo }, myRouterState: MyRouterState) => {
    const todoId = myRouterState.params.id;
    if (todoId && todos) {
      return todos[todoId];
    } else {
      return null;
    }
  }
);

