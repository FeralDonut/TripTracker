import React from 'react';
import Form from '../Form/Form';
import Input from '../Inputs/Input';


const CreateTodoForm = props => {
  const { 
    id,
    name,
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
      publishTodo(id, name, description);
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
      disabled={!name || !description}
    >
      <Input
        name="name"
        type="text"
        placeholder="name"
        id="name"
        onChange={e => handleChange(e)} 
      />
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