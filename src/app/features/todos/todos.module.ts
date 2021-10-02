import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TODOS_ROUTES } from './todos.routes';
import { StoreModule } from '@ngrx/store';
import { todoFeatureKey, todosReducer } from './shared/store/todos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './shared/store/todos.effects';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [TodosComponent],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(TODOS_ROUTES),
    StoreModule.forFeature(todoFeatureKey, todosReducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
})
export class TodosModule {}
