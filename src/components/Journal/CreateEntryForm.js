import React from 'react';
import Form from '../Form/Form';

const CreateEntryForm = (props) => {
  const {
    id,
    description,
    editPendingEntry,
    publishEntry,
    deleteEntry
  } = props;

  const handleChange = (event) => {
    editPendingEntry({ [event.target.name]: event.target.value, id: 'new_entry' });
  };
  const createSave = (e) => {
    e.preventDefault();
    publishEntry(id, description);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    deleteEntry( id );
  };
  return (
    <Form
      legend="Create a New Entry"
      handleSave={createSave}
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
  );
};

export default CreateEntryForm;
