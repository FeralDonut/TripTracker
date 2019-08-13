import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const EateriesList = ({ restaurants, tripID, apiCall }) => {
  const handleClick = eatery => {
    fetch(
      `http://24.4.98.147:8000/api/trips/${tripID}/restaurants/${eatery._id}`,
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          visited: !eatery.visited
        })
      }
    )
      .then(res => res.json())
      .then(data => console.log("POST RESPONSE", data))
      .then(apiCall);
  };

  const handleDelete = eateryID => {
    fetch(
      `http://24.4.98.147:8000/api/trips/${tripID}/restaurants/${eateryID}`,
      {
        method: "DELETE"
      }
    ).then(response =>
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
      {restaurants.map(eatery => (
        <ListItem key={eatery._id} dense button>
          <Checkbox
            checked={eatery.visited}
            tabIndex={-1}
            disableRipple
            onClick={() => handleClick(eatery._id)}
          />
          <ListItemText primary={eatery.name} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                handleDelete(eatery._id);
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
