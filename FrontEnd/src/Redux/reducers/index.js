import { combineReducers } from 'redux';
import pendingTodo from './pendingTodo';
import todos from './todos';

export default combineReducers({
  pendingTodo,
  todos
});