/*****************
 * 
 * TodoList Actions
 * 
 ******************/
export const addTodo = () => {
  const id = Math.random();
  return {
  type: 'ADD_TODO',
  id
  }
};

export const editPendingTodo = todo => ({
  type: 'EDIT_PENDING_TODO',
  todo,
});

export const publishTodo= (id, description) => {
  return {
    type: 'PUBLISH_TODO',
    id,
    description,
  }
};

export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    id
  }
};

/*****************
 * 
 * EateriesList Actions
 * 
 ******************/
export const addEatery = () => {
  const id = Math.random();
  return {
  type: 'ADD_EATERY',
  id
  }
};

export const editPendingEatery = eatery => ({
  type: 'EDIT_PENDING_EATERY',
  eatery,
});

export const publishEatery= (id, description) => {
  return {
    type: 'PUBLISH_EATERY',
    id,
    description,
  }
};

export const deleteEatery = id => {
  return {
    type: 'DELETE_EATERY',
    id
  }
};


/*****************
 * 
 * Packing List Actions
 * 
 ******************/
export const addPackingList = () => {
  const id = Math.random();
  return {
  type: 'ADD_PACKING_LIST',
  id
  }
};

export const editPendingPackingList = packingItems => ({
  type: 'EDIT_PENDING_PACKING_LIST',
  packingItems,
});

export const publishPackingList= (id, description) => {
  return {
    type: 'PUBLISH_PACKING_LIST',
    id,
    description,
  }
};

export const deleteItem = id => {
  return {
    type: 'DELETE_PACKING_LIST',
    id
  }
};

export const setActiveTab = tabName => ({
  type: 'SET_ACTIVE_TAB',
  tabName,
});

