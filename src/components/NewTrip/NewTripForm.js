import React, { useState } from "react";
import Form from "../Form/Form";
import Input from "../Inputs/Input";

const NewTripForm = () => {
  const [fireAway, setFireAway] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    StartDate: new Date(),
    EndDate: new Date(),
    Location: {}
  });
  const [location, setLocation] = useState({
    Line1: "",
    Line2: "",
    city: "",
    region: "",
    zip: "",
    country: ""
  });

  const handleLocationChange = e => {
    const { name, value } = e.target;
    setLocation({ ...location, [name]: value });
    console.log("LOCATION ON CHANGE", location);
    setForm({ ...form, ["Location"]: location });
    console.log("FORM WITH LOCATION", form);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log("FORM ON CHANGE", form);
  };

  const createSave = e => {
    e.preventDefault();
    setFireAway(!fireAway);
    console.log("FORM FROM SAVE", form);
    //   fetch(`http://24.4.98.147:8000/api/trips/${tripID}/todos/`, {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json"
    //     },
    //     body: form
    //   })
    //     .then(res => res.json())
    //     .then(data => console.log("POST RESPONSE", data))
    //     .then(apiCall)
    //     // .then(publishTodo(id, description));
  };
  const handleDelete = e => {
    e.preventDefault();
    // deleteTodo(id);
  };

  return (
    <Form
      legend="Let's Plan a Trip!"
      handleSave={createSave}
      handleDelete={handleDelete}
      disabled={false}
    >
      <Input
        name="title"
        type="text"
        placeholder="title"
        id="title"
        onChange={e => handleChange(e)}
      />
      <Input
        name="StartDate"
        type="date"
        placeholder="Start Date"
        id="Start Date"
        onChange={e => handleChange(e)}
      />
      <Input
        name="EndDate"
        type="date"
        placeholder="End Date"
        id="End Date"
        onChange={e => handleChange(e)}
      />
      <Input
        name="city"
        type="text"
        placeholder="City"
        id="City"
        onChange={e => handleLocationChange(e)}
      />
    </Form>
  );
};

export default NewTripForm;
