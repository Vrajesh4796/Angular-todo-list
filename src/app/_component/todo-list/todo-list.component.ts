import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs';

/* Service */
import { TodoService } from 'src/app/_services';

/* Component */
import { AddTodoComponent } from '../add-todo/add-todo.component'

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

    todos : any = [];
    loading = false;
    limit = 5;

    constructor(public todoSer : TodoService,
        public dialog: MatDialog) { }

    ngOnInit(): void {       
        this.todos = this.todoSer.getAll   
    }

    deleteTodo(id: string) {
        const todo = this.todoSer.getAll.find((x:any) => x.id === id);
        this.todoSer.delete(id);
    }

    openDialog() {
        const dialogRef = this.dialog.open(AddTodoComponent,{
            width: '550px',
            data: { action : 'add' }
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
    }

    /*Edir User Details */
    addEditTodo(index : any,tododetails : any){
        const dialogRef = this.dialog.open(AddTodoComponent,{
            width: '550px',
            data: { action : 'edit', todoData : tododetails }
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);  
        });
    }

    /* Load More */
    loadMore() {
        this.limit += 5;

        if (!this.loading) {
          setTimeout(() => {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 1000);
          }, 250);
        }
    }
  
}
