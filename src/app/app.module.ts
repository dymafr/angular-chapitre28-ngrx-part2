import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TodoService } from './todo.service';

import { reducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { MyRouterStateSerializer } from './store/router.helper';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot([
      {
        path: '', redirectTo: 'todo', pathMatch: 'full',
      },
      {
        path: 'todo', loadChildren: () => import('src/app/todos/todos.module').then(m => m.TodosModule)
      },
    ]),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
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
