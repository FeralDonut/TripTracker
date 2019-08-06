import React from 'react';
import Form from '../Form/Form';
import Input from '../Inputs/Input';


const CreateTodoForm = props => {
  const { 
    id,
    description,
    editPendingTodo,
    publishTodo, 
    deleteTodo 
  } = props;

  const handleChange = (event) => {
    editPendingTodo({ [event.target.name]: event.target.value, id });
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
      publishTodo(id, description);
    // })
    
  };
  const handleDelete = (e) => {
    e.preventDefault();
    deleteTodo( id );
  };
  return (
    <Form
      legend="Add to your To Do List"
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

export default CreateTodoForm;