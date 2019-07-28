import { combineReducers } from 'redux';
import dashboardTab from './dashboardTab';
import pendingTodo from './pendingTodo';
import todos from './todos';
import pendingEatery from './pendingEatery';
import eateries from './eateries';
import packingItems from './packingItems';
import pendingPackingList from './pendingPackingList';

export default combineReducers({
  dashboardTab,
  pendingTodo,
  todos,
  pendingEatery,
  eateries,
  pendingPackingList,
  packingItems,
});