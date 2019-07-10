import React, { Fragment } from 'react';
import CreateTodo from '../CreateTodo/CreateTodoContainter';
import TodoList from '../TodoList/TodoListContainer';
import style from './homeStyle.css';


export default () => (
  <Fragment>
    <div
      className={style.container}
      id="MyApp"
    >
      <div className={style.tasks}>
        <CreateTodo />
        <TodoList />
      </div>
    </div>
  </Fragment>
);
