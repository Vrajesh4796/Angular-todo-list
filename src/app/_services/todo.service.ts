import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Services */
import { LocalService,CommonService, AlertService } from './index';

@Injectable({ providedIn: 'root' })
export class TodoService {

    todos : any = [];
    todoKey : string =  'todo-details';

    constructor(private http: HttpClient,
        private local : LocalService,
        private common : CommonService,
        private alertService : AlertService) {
        }

    /* Get All Todo List */
    get getAll() {
        return this.common.todoDetails.length > 0 ? JSON.parse(this.common.todoDetails) : [];
    }

    /* Create Todo */
    create(params:any) {
        this.todos = this.common.todoDetails.length > 0 ? JSON.parse(this.common.todoDetails) : []

        if(this.todos.length > 0){
            if (this.todos.find((x:any) => x.task_name === params.task_name)) {
                this.alertService.error(`${params.task_name} is already exists`);
                return;
            }
        }

        // assign todo id and a few other properties then save
        params.id = this.newUserId();
        params.color = Math.floor(Math.random()*16777215).toString(16);
        this.todos.push(params);
        this.local.setJsonValue(this.todoKey, JSON.stringify(this.todos))
        this.alertService.success('Task added', { keepAfterRouteChange: true });
    }

    /* Update Todo */
    update(params:any) {
        this.todos = JSON.parse(this.common.todoDetails)

        if(this.todos.length > 0){
            if (this.todos.find((x:any) => x.task_name === params.task_name && x.id !== params.id)) {
                this.alertService.error(`${params.task_name} is already exists`);
                return;
            }
        }

        let todo = this.todos.find((x:any) => x.id === params.id);

        // update and save user
        Object.assign(todo, params);
        this.local.setJsonValue(this.todoKey, JSON.stringify(this.todos));
        this.alertService.success('Task Updated', { keepAfterRouteChange: true });
    }

    /* Delete Todo */
    delete(id: any) {
        this.todos = JSON.parse(this.common.todoDetails)
    
        const data = this.todos.filter((x:any) => x.id !== id);
        this.local.setJsonValue(this.todoKey, JSON.stringify(data));
        this.alertService.success('Task Deleted', { keepAfterRouteChange: true });
    }

    newUserId() {
        return this.todos.length ? Math.max(...this.todos.map((x:any) => x.id)) + 1 : 1;
    }
}