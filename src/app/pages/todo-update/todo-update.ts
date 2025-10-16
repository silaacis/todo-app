import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../services/todo-service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-update',
  imports: [ReactiveFormsModule],
  templateUrl: './todo-update.html',
  styleUrl: './todo-update.css'
})
export class TodoUpdate {

  todoForm= new FormGroup({
    content: new FormControl(''),
    id: new FormControl(0)
  })
  id: number|undefined;

  constructor(private router:Router,private todoservice:TodoService,private activatedroute:ActivatedRoute){}

  ngOnInit(){
    this.id=Number(this.activatedroute.snapshot.paramMap.get('id'));

    this.todoservice.get(this.id).subscribe(x=>{
      this.todoForm.get('content')?.setValue(x.content);
      this.todoForm.get('id')?.setValue(x.id);
    })

  }

  update(){
    this.todoservice.update(this.todoForm.value as TodoUpdate).subscribe(x=>{
      if(x==true){
        this.router.navigateByUrl("/todos");
      }
      else{
        alert("Güncelleme gerçekleşmedi");
      }
    })

  }



}
