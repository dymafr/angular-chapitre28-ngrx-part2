import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { FETCH_TODO, FetchTodo, FetchTodoSuccess, FetchTodoError } from './todos.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Todo } from 'src/app/todo.model';
import { TodoService } from 'src/app/todo.service';

@Injectable()
export class TodosEffects {
  @Effect()
  public fetchTodo$: Observable<Action> = this.actions$.pipe(
    ofType(FETCH_TODO),
    switchMap((fetchTodo: FetchTodo) => {
      return this.todoService.getTodos();
    }),
    map((todos: Todo[]) => {
      return new FetchTodoSuccess(todos);
    }),
    catchError((err: any) => {
      return of(new FetchTodoError(err));
    })
  );



  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) { }
}
