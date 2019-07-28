import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const PackingList = ({ packingItems, deleteItem }) => {
  const [ checked, setChecked ] = useState(true);

  const handleClick = () => {
    setChecked(!checked);
  }

  return (
    <List>
      {packingItems.map(item => (
        <ListItem key={item.id} dense button>
        <Checkbox tabIndex={-1} disableRipple onClick={() => handleClick()}/>
          <ListItemText primary={item.description} />
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
)};

export default PackingList;
