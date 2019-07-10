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

export const publishTodo= (id, name, description) => {
  return {
    type: 'PUBLISH_TODO',
    id,
    name,
    description,
  }
};

export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    id
  }
};