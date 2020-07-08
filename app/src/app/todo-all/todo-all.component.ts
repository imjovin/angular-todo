import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {todo} from '../models/todo';
import { Moment } from 'moment';
@Component({
  selector: 'app-todo-all',
  templateUrl: './todo-all.component.html',
  styleUrls: ['./todo-all.component.css']
})
export class TodoAllComponent implements OnInit {
minDate:Date= new Date();
newTodoForm= new FormGroup({
title:new FormControl('',Validators.required),
dueDate:new FormControl('',Validators.required)
});
todos:todo[]=[];
constructor() { }
ngOnInit(): void {}
onAddToDo(){
this.todos.push(this.newTodoForm.value);
this.newTodoForm.reset();
}
onDeleteToDo(todoToDel:todo){
  const deleteIndex= this.todos.indexOf(todoToDel);
  if (deleteIndex > -1) {
    this.todos.splice(deleteIndex, 1);
  }
}
}
