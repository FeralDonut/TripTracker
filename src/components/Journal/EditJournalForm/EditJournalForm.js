import React from "react";
import style from "./EditJournalFormStyles.module.css";
import Form from "../../Form/Form";
import Input from "../../Inputs/Input";

const EditJournalForm = props => {
  const {
    blogID,
    tripID,
    apiCall,
    deleteEntry,
    editEntry,
    editActiveEntry,
    updateEntry,
    deselectEntry
  } = props;
  const { id, title, date, description } = editActiveEntry;

  const editSave = e => {
    e.preventDefault();
    fetch(`http://24.4.98.147:8000/api/trips/${tripID}/posts/${blogID}`, {
      method: "PATCH",
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
      .then(data => console.log("POST RESPONSE", data))
      .then(apiCall);
  };

  const handleDelete = e => {
    e.preventDefault();
    console.log("EDITJOURNALHANDLEDELETE");

    fetch(`http://24.4.98.147:8000/api/trips/${tripID}/posts/${blogID}`, {
      method: "delete"
    })
      .then(response =>
        response.json().then(json => {
          console.log(json);
        })
      )
      .then(apiCall);
  };

  const handleChange = e => {
    editEntry({ [e.target.name]: e.target.value, id });
  };

  const handleDeselect = event => {
    if (event.relatedTarget.id === "gatsby-focus-wrapper") {
      deselectEntry();
    }
    return;
  };

  return (
    <div
      onBlur={handleDeselect}
      tabIndex={0}
      className={style.editFormContainer}
    >
      <Form
        legend="Update Your Entry"
        handleSave={editSave}
        handleDelete={handleDelete}
      >
        <Input
          name="title"
          type="text"
          placeholder="Entry Title"
          id="title"
          value={title}
          onChange={e => handleChange(e)}
        />
        <textarea
          id="description"
          name="description"
          rows="6"
          cols="75"
          value={description}
          onChange={e => handleChange(e)}
          autoFocus
        />
      </Form>
    </div>
  );
};

export default EditJournalForm;
