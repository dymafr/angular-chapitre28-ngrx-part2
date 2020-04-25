import { Injectable } from "@angular/core";
import { timer, Observable } from "rxjs";
import { Todo } from "./todo.model";
import { map } from "rxjs/operators";

@Injectable()
export class TodoService {
  constructor() { }

  public getTodos(): Observable<Todo[]> {
    return timer(2000).pipe(
      map(() => [
        {
          id: "1",
          message: "work",
          done: false,
        },
        {
          id: "2",
          message: "movie",
          done: false,
        },
      ])
    );
  }
}
