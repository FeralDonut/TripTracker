import { combineReducers } from 'redux';
import dashboardTab from './dashboardTab';
import pendingTodo from './pendingTodo';
import todos from './todos';
import pendingEatery from './pendingEatery';
import eateries from './eateries';
import packingItems from './packingItems';
import pendingPackingList from './pendingPackingList';
import pendingEntry from './pendingEntry';
import journalEntry from './journalEntry';
import activeEntry from './activeEntry';
import editActiveEntry from './editActiveEntry';

export default combineReducers({
  dashboardTab,
  pendingTodo,
  todos,
  pendingEatery,
  eateries,
  pendingPackingList,
  packingItems,
  pendingEntry,
  journalEntry,
  activeEntry,
  editActiveEntry,
});