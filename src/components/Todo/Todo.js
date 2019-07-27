import React, { Fragment } from 'react';
import style from './TodoStyles.module.css';

const Todo = props => {
  console.log(props.description)
  const { 
    description,
    todos
  } = props;

  return (
    <Fragment>
      {
        todos.length > 0 ?
        <div >
          <p>{description}</p>
        </div> : null
      }
    </Fragment>
  );
}

export default Todo;