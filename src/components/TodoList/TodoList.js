import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoList = ({ todos, tripID, deleteTodo }) => {
  const handleClick = event => {};

  const handleDelete = todoID => {
    console.log("delete todo", todoID);
    fetch(`http://24.4.98.147:8000/api/trips/${tripID}/todos/${todoID}`, {
      method: "delete"
    }).then(response =>
      response.json().then(json => {
        return json;
      })
    );
  };

  return (
    <List>
      {todos.map(todo => (
        <ListItem key={todo._id} dense button>
          <Checkbox
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            onClick={() => handleClick()}
          />
          <ListItemText primary={todo.title} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => handleDelete(todo._id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
