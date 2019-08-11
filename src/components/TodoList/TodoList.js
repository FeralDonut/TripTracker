import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoList = ({ todos, tripID, deleteTodo, apiCall }) => {
  const handleClick = todo => {
    fetch(`http://24.4.98.147:8000/api/trips/${tripID}/todos/${todo._id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        completed: !todo.completed
      })
    })
      .then(res => res.json())
      .then(data => console.log("POST RESPONSE", data))
      .then(apiCall);
  };

  const handleDelete = todoID => {
    fetch(`http://24.4.98.147:8000/api/trips/${tripID}/todos/${todoID}`, {
      method: "delete"
    }).then(response =>
      response
        .json()
        .then(json => {
          return json;
        })
        .then(apiCall)
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
            onClick={() => handleClick(todo)}
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
