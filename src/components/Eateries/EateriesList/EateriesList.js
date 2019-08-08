import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const EateriesList = ({ eateries, restaurants, deleteEatery }) => {
  const handleClick = () => {};

  return (
    <List>
      {restaurants.map(eatery => (
        <ListItem key={eatery._id} dense button>
          <Checkbox
            checked={eatery.visited}
            tabIndex={-1}
            disableRipple
            onClick={() => handleClick()}
          />
          <ListItemText primary={eatery.name} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                deleteEatery(eatery.id);
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

export default EateriesList;
