import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TodoService } from './todo.service';

import { reducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { MyRouterStateSerializer } from './store/router.helper';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './store/todos.effects';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'todo', pathMatch: 'full',
      },
      {
        path: 'todo', component: TodoListComponent
      },
      {
        path: 'todo/:id', component: TodoListComponent
      }
    ]),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TodosEffects]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    }),
    StoreDevtoolsModule.instrument({
      name: 'todo',
    }),
  ],
  providers: [
    TodoService,
    {
      provide: RouterStateSerializer,
      useClass: MyRouterStateSerializer
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
