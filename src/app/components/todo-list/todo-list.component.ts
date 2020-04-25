import { Component, OnInit } from '@angular/core';
import { Store, select, State } from '@ngrx/store';
import * as todosAction from '../../store/todos.actions';
import { TodoState } from '../../store/todos.reducer';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/todo.model';
import { todoListArraySelector, selectedTodoSelector } from 'src/app/store/todos.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todos$: Observable<Todo[]> = this.store.pipe(select(todoListArraySelector));
  public selectedTodo$: Observable<Todo> = this.store.pipe(select(selectedTodoSelector));

  public message: string;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new todosAction.FetchTodo());
  }

  public addTodo() {
    this.store.dispatch(new todosAction.CreateTodo({ message: this.message, done: false }));
  }

  public toggleTodo(id: string) {
    this.store.dispatch(new todosAction.ToggleTodo(id));
  }

  public deleteTodo(id: string) {
    this.store.dispatch(new todosAction.DeleteTodo(id));
  }
}
