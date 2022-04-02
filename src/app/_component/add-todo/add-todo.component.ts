import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AlertService, TodoService } from 'src/app/_services';

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
    
    addEditTaskForm : any =  FormGroup;
    id!: string;
    loading = false;
    submitted = false;
    
    constructor(public dialogRef: MatDialogRef<AddTodoComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private todoService : TodoService,
        private alertService : AlertService,
        private router : Router,
        private formBuilder : FormBuilder) { }

    ngOnInit(): void {

        this.addEditTaskForm = this.formBuilder.group({
            id : [this.data.action == 'edit' ? this.data.todoData.id : ''],
            task_name: ['', [Validators.required]],
            task_status: ['', [Validators.required]],
            is_completed: [false]
        });

        if (this.data?.action == 'edit') {
            this.addEditTaskForm.patchValue(this.data.todoData);
        }
    }

    /* Check Validation*/
    get valid() { return this.addEditTaskForm.controls }

    closeDialog(): void {
        this.dialogRef.close();
    }

    /* Add Edit Todo */
    addEditTodo(formData:any) {

        if(this.addEditTaskForm.invalid){
            this.submitted = true;
            return;
        }

        this.closeDialog();
        if(this.data.action == 'edit'){
            this.todoService.update(formData);
        }else{
            this.todoService.create(formData);
        }
    }

}
