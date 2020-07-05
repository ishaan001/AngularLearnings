import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from './../model/Todo';
 
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos : Todo[];
  constructor() {
    this.todos = [
    {
      id : '1',
      title : 'learn java',
      isCompleted : true,
      date : new Date()
    },
    {
      id : '2',
      title : 'learn DS and ALGO',
      isCompleted : false,
      date : new Date()
    },
    {
      id : '3',
      title : 'learn Angular',
      isCompleted : false,
      date : new Date()
    },
  ];
   }

   getTodos = () => {
     return of(this.todos);
   }

   addTodos(todo : Todo){
    this.todos.push(todo);
   }

   changeStatus(todo : Todo){
     this.todos.map(singleTodo => {
       if(singleTodo.id === todo.id){
         todo.isCompleted = !todo.isCompleted;
       }
     })
   }

   deleteTodo(todo : Todo){
     const index = this.todos.findIndex( (x) => x.id == todo.id);
     this.todos.splice(index, 1);
    }

}
