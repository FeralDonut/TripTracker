import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const PackingList = ({ tripID, apiCall, deleteItem, list }) => {
  const handleClick = item => {
    fetch(
      `http://24.4.98.147:8000/api/trips/${tripID}/packinglist/${item._id}`,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          packed: !item.packed
        })
      }
    )
      .then(res => res.json())
      .then(data => data)
      .then(apiCall);
  };

  const handleDelete = itemID => {
    fetch(`http://24.4.98.147:8000/api/trips/${tripID}/packinglist/${itemID}`, {
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
      {list.map(item => (
        <ListItem key={item._id} dense button>
          <Checkbox
            checked={item.packed}
            tabIndex={-1}
            disableRipple
            onClick={() => handleClick(item)}
          />
          <ListItemText primary={item.item} secondary={item.count} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                handleDelete(item._id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default PackingList;
