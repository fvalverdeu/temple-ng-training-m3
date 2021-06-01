import { AddTodo } from './../../store/todos/todos.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  public text: string;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  addTodo() {
    const randomId = Math.floor(Math.random()*10000 + 10000);
    const idFormat = String(randomId).padStart(4, '0');
    const todoId = `id-store-tarea-${idFormat}`;
    this.store.dispatch(new AddTodo({id: todoId, text: this.text}));
  }

}
