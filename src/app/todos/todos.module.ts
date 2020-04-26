import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { todosReducer } from './store/todos.reducer';
import { TodosEffects } from './store/todos.effects';



@NgModule({
  declarations: [
    TodosComponent,
    TodoListComponent
  ],
  imports: [
    FlexLayoutModule,
    FormsModule,
    CommonModule,
    StoreModule.forFeature('todos', todosReducer),
    EffectsModule.forFeature([TodosEffects]),
    RouterModule.forChild([
      {
        path: '', component: TodosComponent, children: [
          {
            path: '', component: TodoListComponent
          },
          {
            path: ':id', component: TodoListComponent
          }
        ]
      }
    ])
  ]
})
export class TodosModule { }
