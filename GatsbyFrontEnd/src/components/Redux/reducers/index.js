import { combineReducers } from 'redux';
import dashboardTab from './dashboardTab';
import pendingTodo from './pendingTodo';
import todos from './todos';

export default combineReducers({
  dashboardTab,
  pendingTodo,
  todos
});