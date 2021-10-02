import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/todos/todos.module').then((m) => m.TodosModule),
  },
];
