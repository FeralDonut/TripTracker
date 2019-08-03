import React from 'react';
import style from './EditJournalFormStyles.module.css';
import Form from '../../Form/Form';

const EditTaskForm = (props) => {
  const {
    deleteEntry,
    editEntry,
    editActiveEntry,
    updateEntry,
    deselectEntry
  } = props;
  const {
    id,
    description
  } = editActiveEntry;
 
  const editSave = (e) => {
    e.preventDefault();
    updateEntry( id, description );
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteEntry( id );
  };

  const handleChange = (e) => {
    editEntry({ [e.target.name]: e.target.value, id });
  };

  const handleDeselect = (event) => {
    if (event.relatedTarget === null ) {
      deselectEntry();
    }
    return;
  };     
  

  return (
    <div
      onBlur={handleDeselect}
      tabIndex={0}
      className={style.editFormContainer}
    >
      <Form
        legend="Update Your Entry"
        handleSave={editSave}
        handleDelete={handleDelete}
        disabled={!description}
      >
        <textarea
          id="description"
          name="description"
          rows="6"
          cols="75"
          onChange={e => handleChange(e)} 
        />
      </Form>
    </div>
  );
};

export default EditTaskForm;
