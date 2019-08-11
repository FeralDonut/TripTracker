import React from "react";
import Form from "../../Form/Form";
import Input from "../../Inputs/Input";

const CreateEateryForm = props => {
  const {
    id,
    description,
    editPendingEatery,
    publishEatery,
    deleteEatery,
    tripID,
    apiCall
  } = props;

  const handleChange = event => {
    editPendingEatery({ [event.target.name]: event.target.value, id });
  };
  const createSave = e => {
    e.preventDefault();
    fetch(`http://24.4.98.147:8000/api/trips/${tripID}/restaurants`, {
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
      .then(publishEatery(id, description));
  };
  const handleDelete = e => {
    e.preventDefault();
    deleteEatery(id);
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
};

export default CreateEateryForm;
