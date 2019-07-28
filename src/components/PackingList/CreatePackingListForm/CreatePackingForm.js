import React from 'react';
import Form from '../../Form/Form';
import Input from '../../Inputs/Input';


const CreatePackingListForm = props => {
  const { 
    id,
    description,
    editPendingPackingList,
    publishPackingList, 
    deletePackingList, 
  } = props;

  const handleChange = (event) => {
    editPendingPackingList({ [event.target.name]: event.target.value, id });
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
      publishPackingList(id, description);
    // })
    
  };
  const handleDelete = (e) => {
    e.preventDefault();
    deletePackingList( id );
  };
  return (
    <Form
      legend="What to Pack?"
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

export default CreatePackingListForm;