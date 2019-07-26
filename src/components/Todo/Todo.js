import React, { Fragment } from 'react';
import style from './TodoStyles.module.css';

const Todo = props => {
  const { 
    description,
    todos
  } = props;

  return (
    <Fragment>
      {
        todos.length > 0 ?
        <div className={style.todo}>
          <p>{description}</p>
        </div> : null
      }
    </Fragment>
  );
}

export default Todo;