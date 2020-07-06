import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {todo} from '../models/todo';
@Component({
  selector: 'app-todo-all',
  templateUrl: './todo-all.component.html',
  styleUrls: ['./todo-all.component.css']
})
export class TodoAllComponent implements OnInit {
newTodoForm= new FormGroup({
title:new FormControl(),
dueDate:new FormControl('')
});
  todos:todo[]=[];
  constructor() { }

  ngOnInit(): void {
  }
onAddToDo(){
console.log(this.newTodoForm.value);
this.todos.push(this.newTodoForm.value);
}
onDeleteToDo(){

}
}
