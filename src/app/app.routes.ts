import { Routes } from '@angular/router';
import { TodoList } from './pages/todo-list/todo-list';
import { TodoAdd } from './pages/todo-add/todo-add';
import { TodoUpdate } from './pages/todo-update/todo-update';

export const routes: Routes = [
    {path:"",redirectTo:"/todos",pathMatch:'full'},
    {path:"todos",component:TodoList},
    {path:"todo-add",component:TodoAdd},
    {path:"todo-update/:id",component:TodoUpdate},
];
