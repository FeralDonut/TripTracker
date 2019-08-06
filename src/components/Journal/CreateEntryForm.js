import React from 'react';
import Form from '../Form/Form';
import Input from '../Inputs/Input';
import moment from 'moment';


const CreateEntryForm = (props) => {
  const {
    id,
    title,
    description,
    editPendingEntry,
    publishEntry,
    deleteEntry
  } = props;

  const handleChange = (event) => {
    editPendingEntry({ [event.target.name]: event.target.value, id});
  };

  const createSave = (e) => {
    e.preventDefault();
    const date = moment(new Date()).format('MMM DD YYYY')

    publishEntry(id, title, date, description);
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
      disabled={!title || !description}
    >
       <Input
        name="title"
        type="text"
        placeholder="Entry Title"
        id="title"
        onChange={e => handleChange(e)} 
      />
      <textarea
        id="description"
        name="description"
        placeholder="Journal Entry"
        rows="6"
        cols="75"
        onChange={e => handleChange(e)} 
      />
    </Form>
  );
};

export default CreateEntryForm;