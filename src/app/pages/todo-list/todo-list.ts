import { Component } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { Todo } from '../../models/todo';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [RouterLink,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.css']
})
export class TodoList {

  todoList:Todo[]=[];
  constructor(private todoService:TodoService){}

  ngOnInit(){
    this.load();
  }

  load(){
    this.todoService.getAll().subscribe(x=>this.todoList=x);
  }

  delete(id:number){
    this.todoService.delete(id).subscribe(x=>{
      if(x==true){
        this.load();
      }
      else{
        alert("Todo Silinemedi");
      }
    })
  }

  isCompleted(id:number){
    this.todoService.isCompleted(id).subscribe(x=>{
      if(x==true){
        let index = this.todoList.findIndex(x=>x.id===id);
        this.todoList[index].isCompleted=!this.todoList[index].isCompleted;
      }
    })
  }
}
  

