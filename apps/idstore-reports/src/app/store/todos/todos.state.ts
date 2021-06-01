import { AddTodo, RemoveTodo } from './todos.actions';
import { TodosStateModel } from './todos.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';

@State({
  name: 'todos',
  defaults: { todos: [] }
})
export class TodosState {
  @Selector()
  static getTodos(state: TodosStateModel) {
    return state.todos;
  }

  @Action(AddTodo)
  add({ getState, patchState }: StateContext<TodosStateModel>, {payload}: AddTodo) {
    const state = getState();
    patchState({ todos: [...state.todos, payload] });
  }

  @Action(RemoveTodo)
  remove({ getState, patchState }: StateContext<TodosStateModel>, {payload}: RemoveTodo) {
    patchState({ todos: getState().todos.filter(item => item.id !== payload) });
  }
}
