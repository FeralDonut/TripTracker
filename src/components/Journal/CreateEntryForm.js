import React from "react";
import Form from "../Form/Form";
import Input from "../Inputs/Input";
import moment from "moment";

const CreateEntryForm = props => {
  const {
    tripID,
    id,
    title,
    description,
    editPendingEntry,
    publishEntry,
    deleteEntry
  } = props;

  const handleChange = event => {
    editPendingEntry({ [event.target.name]: event.target.value, id });
  };

  const createSave = e => {
    e.preventDefault();
    const date = moment(new Date()).format("MMM DD YYYY");

    fetch(`http://24.4.98.147:8000/api/trips/${tripID}/posts/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        body: description
      })
    })
      .then(res => res.json())
      .then(data => console.log("POST RESPONSE", data));
    //{
    // const dailyData = data.list.filter(reading =>
    //   reading.dt_txt.includes("18:00:00")
    // );
    publishEntry(tripID, title, date, description);
  };
  const handleDelete = e => {
    e.preventDefault();
    deleteEntry(id);
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
