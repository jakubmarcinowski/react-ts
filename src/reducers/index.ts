import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

export interface StoreState {
  todos: Todo[];
}

// dummy reducer
export const reducers = combineReducers<StoreState>({
  todos: todosReducer
});
