export class TodosStateModel {
  todos: Todos[];
}

export interface Todos {
  id: string;
  text: string;
}
