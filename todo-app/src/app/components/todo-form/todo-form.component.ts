import { Component, OnInit } from '@angular/core';
import { Todo } from './../../model/Todo';
import { v4 as uuidv4 } from "uuid";
import { TodoService } from './../../service/todo.service'
import { empty } from 'rxjs';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoTitle :string = '';
  isEmpty : boolean = false;
  message : string;
  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
  }

  handleAdd(){
    const todo : Todo ={
      id : uuidv4(),
      title : this.todoTitle,
      isCompleted :false,
      date : new Date(),
    };
    if(todo.title === '' || todo.title == ' '){
      this.isEmpty = true;
      this.message = 'text box can\'t be empty';
    }else{
      this.isEmpty = false;
      this.todoService.addTodos(todo);
    } 
    this.todoTitle = '';
  }
}
