import React from "react";
import Form from "../Form/Form";
import Input from "../Inputs/Input";

const CreateTodoForm = props => {
  const {
    tripID,
    id,
    description,
    editPendingTodo,
    publishTodo,
    deleteTodo,
    apiCall
  } = props;

  const handleChange = event => {
    editPendingTodo({ [event.target.name]: event.target.value, id });
  };
  const createSave = e => {
    e.preventDefault();
    fetch(`http://24.4.98.147:8000/api/trips/${tripID}/todos/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: description
      })
    })
      .then(res => res.json())
      .then(data => console.log("POST RESPONSE", data))
      .then(apiCall)
      .then(publishTodo(id, description));
  };
  const handleDelete = e => {
    e.preventDefault();
    deleteTodo(id);
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
};

export default CreateTodoForm;
