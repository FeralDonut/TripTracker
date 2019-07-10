import React, { Fragment } from 'react';
import style from './TodoStyles.css';

const Todo = props => {
  const { 
    name,
    description,
    todos
  } = props;

  return (
    <Fragment>
      {
        todos.length > 0 ?
        <div className={style.todo}>
          <h1 className={style.name}>
            {name}
          </h1>
          <p>{description}</p>
        </div> : null
      }
    </Fragment>
  );
}

export default Todo;