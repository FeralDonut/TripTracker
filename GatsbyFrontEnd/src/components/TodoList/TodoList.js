import React from 'react';
import style from './TodoListStyles.module.css';
import Todos from '../Todo/TodoContainer';

const TodoList = props => {
  const todo = props.todos.map(todo => (
    <Todos 
      key={todo.id}
      id={todo.id}
      name={todo.name}
      description={todo.description}
    />
  ));

  return (
    <div className={style.container} >
      {todo}
    </div>
  );
};

export default TodoList;