import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const PackingList = ({ packingItems, deleteItem, list }) => {
  const handleClick = () => {};

  return (
    <List>
      {list.map(item => (
        <ListItem key={item._id} dense button>
          <Checkbox
            checked={item.packed}
            tabIndex={-1}
            disableRipple
            onClick={() => handleClick()}
          />
          <ListItemText primary={item.item} secondary={item.count} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                deleteItem(item.id);
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
