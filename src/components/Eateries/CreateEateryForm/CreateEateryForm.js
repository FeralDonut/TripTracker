import React from 'react';
import Form from '../../Form/Form';
import Input from '../../Inputs/Input';


const CreateEateryForm = props => {
  const { 
    id,
    description,
    editPendingEatery,
    publishEatery, 
    deleteEatery 
  } = props;

  const handleChange = (event) => {
    editPendingEatery({ [event.target.name]: event.target.value, id });
  };
  const createSave = (e) => {
    e.preventDefault();
    // fetch('http://localhost:3000/todo', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({name, description})
    // }).then(res => {
      publishEatery(id, description);
    // })
    
  };
  const handleDelete = (e) => {
    e.preventDefault();
    deleteEatery( id );
  };
  return (
    <Form
      legend="Add Places To Eat"
      handleSave={createSave}
      handleDelete={handleDelete}
      disabled={!description}
    >
      <Input
        name="description"
        type="text"
        placeholder="description"
        id="description"
        onChange={e => handleChange(e)} 
      />
    </Form>
  );
}

export default CreateEateryForm;