import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
  // default first = 0 next = 1
  fetchTodos,
  deleteTodo
}

export type Action = FetchTodosAction | DeleteTodoAction;
