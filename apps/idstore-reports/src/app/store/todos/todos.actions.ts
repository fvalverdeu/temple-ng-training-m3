import { Todos } from './todos.model';
export class AddTodo {
  static readonly type = '[TODOS] Add Todo';
  constructor(public payload: Todos) {}
}

export class RemoveTodo {
  static readonly type = '[TODOS] Remove Todo';
  constructor(public payload: string) {}
}
