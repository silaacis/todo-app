import { Component } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  imports: [ReactiveFormsModule],
  templateUrl: './todo-add.html',
  styleUrl: './todo-add.css'
})
export class TodoAdd {

  todoForm= new FormGroup({
    content: new FormControl('')

  })

  constructor(private todoService:TodoService,private route:Router){}

  ngOnInit(){
  }

  add(){
    this.todoService.add(this.todoForm.value as TodoAdd).subscribe(x=>{
      if(x==true){
        this.route.navigateByUrl('/todos');
      }
    })
  }

}
