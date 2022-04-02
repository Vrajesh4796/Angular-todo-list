import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Component */
import { TodoTaskComponent } from './todo-task.component';
import { TodoListComponent } from './todo-list/todo-list.component';


const routes: Routes = [
    {
        path: '', component: TodoTaskComponent,
        children: [
            {
                path: '',
                redirectTo: 'todo-list',
                pathMatch: 'full'
            },
            { path: 'todo-list', component: TodoListComponent },
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }