import { RemoveTodo } from './../../store/todos/todos.actions';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Todos } from '../../store/todos/todos.model';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos: Observable<Todos[]>;

  constructor(private store: Store) {
    this.todos = this.store.select(state => state.todos.todos);
    /**
     * this.store.select(state => state.todos.todos).subscribe(response => {
     *    this.todos = response;
     * })
     *
     */
  }

  ngOnInit(): void {
  }

  removeTodo(id: string): void {
    this.store.dispatch(new RemoveTodo(id));
  }

}
