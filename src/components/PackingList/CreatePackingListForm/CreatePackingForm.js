import React, { useState } from "react";
import Form from "../../Form/Form";
import Input from "../../Inputs/Input";

const CreatePackingListForm = props => {
  const {
    id,
    description,
    editPendingPackingList,
    publishPackingList,
    deletePackingList,
    tripID,
    apiCall
  } = props;

  const [count, setCount] = useState(1);

  const handleChange = event => {
    editPendingPackingList({ [event.target.name]: event.target.value, id });
  };
  const createSave = e => {
    e.preventDefault();
    fetch(`http://24.4.98.147:8000/api/trips/${tripID}/packinglist/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        item: description,
        count: count
      })
    })
      .then(res => res.json())
      .then(apiCall)
      .then(publishPackingList(id, count, description));
    // })
  };
  const handleDelete = e => {
    e.preventDefault();
    deletePackingList(id);
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
      <Input
        name="count"
        type="number"
        placeholder="count"
        id="count"
        onChange={e => setCount(e.target.value)}
      />
    </Form>
  );
};

export default CreatePackingListForm;
