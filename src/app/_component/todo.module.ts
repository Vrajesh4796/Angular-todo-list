import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Component */
import { TodoTaskComponent } from './todo-task.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { AlertComponent } from './alert/alert.component';

/* Roting Module */
import { UsersRoutingModule } from './todo-routing.module';

/* Material */
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';

/* Form */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoTaskComponent,
    TodoListComponent,
    AddTodoComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule
  ],
  exports: [
    AlertComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TodoModule { }
