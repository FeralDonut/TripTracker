import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = ({ todos, deleteTodo }) => {
  const [ checked, setChecked ] = useState(true);

  const handleClick = () => {
    setChecked(!checked);
  }

  return (
    <List>
      {todos.map(todo => (
        <ListItem key={todo._id} dense button>
          <Checkbox tabIndex={-1} disableRipple onClick={() => handleClick()}/>
          <ListItemText primary={todo.title} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
)};

export default TodoList;

// import React from 'react';
// import style from './TodoListStyles.module.css';
// import Todos from '../Todo/TodoContainer';

// const TodoList = props => {
//   const todo = props.todos.map(todo => (
//     <Todos 
//       key={todo.id}
//       id={todo.id}
//       name={todo.name}
//       description={todo.description}
//     />
//   ));

//   return (
//     <div className={style.container} >
//       {todo}
//     </div>
//   );
// };

// export default TodoList;