import React from 'react';
import style from './EditJournalFormStyles.module.css';
import Form from '../../Form/Form';
import Input from '../../Inputs/Input';

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
    title,
    date,
    description
  } = editActiveEntry;

  const editSave = (e) => {
    e.preventDefault();
    updateEntry( id, title, date, description );
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteEntry( id );
  };

  const handleChange = (e) => {
    editEntry({ [e.target.name]: e.target.value, id });
  };

  const handleDeselect = (event) => {
    if (event.relatedTarget.id === "gatsby-focus-wrapper" ) {
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
      >
        <Input
          name="title"
          type="text"
          placeholder="Entry Title"
          id="title"
          value={title}
          onChange={e => handleChange(e)} 
      />
        <textarea
          id="description"
          name="description"
          rows="6"
          cols="75"
          value={description}
          onChange={e => handleChange(e)} 
          autoFocus
        >
          
        </textarea>
      </Form>
    </div>
  );
};

export default EditTaskForm;
