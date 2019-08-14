import React, { useState } from "react";
import Form from "../Form/Form";
import Input from "../Inputs/Input";
import style from "./NewTripFormStyle.module.css";

const NewTripForm = ({ newTripSaved, setIndividualTrip }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    start_date: null,
    end_date: null,
    location: {}
  });
  const [location, setLocation] = useState({
    line1: "",
    line2: "",
    city: "",
    region: "",
    zip: "",
    country: ""
  });

  const handleLocationChange = e => {
    const { name, value } = e.target;
    setLocation({ ...location, [name]: value });
    setForm({ ...form, ["location"]: location });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const createSave = e => {
    console.log(JSON.stringify(form));
    e.preventDefault();
    fetch(`http://24.4.98.147:8000/api/trips/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => {
        setIndividualTrip(data);
      })
      .then(newTripSaved);
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
      disabled={!form.title}
    >
      <div>
        Name your trip
        <span aria-hidden="true" className={style.required}>
          *
        </span>
      </div>
      <Input
        name="title"
        type="text"
        placeholder="Trip Name"
        id="title"
        onChange={e => handleChange(e)}
      />
      <div>Add a description!</div>
      <Input
        name="description"
        type="text"
        placeholder="Trip Description"
        id="description"
        onChange={e => handleChange(e)}
      />
      <div className={style.datecontainer}>
        <div className={style.datetoinput}>
          <div>Start Date</div>
          <Input
            name="start_date"
            type="date"
            placeholder="Start Date"
            id="Start Date"
            onChange={e => handleChange(e)}
          />
        </div>
        <div className={style.datetoinput}>
          <div>End Date</div>
          <Input
            name="end_date"
            type="date"
            placeholder="End Date"
            id="End Date"
            onChange={e => handleChange(e)}
          />
        </div>
      </div>
      <div className={style.citystatecontainer}>
        <div className={style.locationinput}>
          <div>
            City
            <span aria-hidden="true" className={style.required}>
              *
            </span>
          </div>
          <Input
            name="city"
            type="text"
            placeholder="City"
            id="city"
            onChange={e => handleLocationChange(e)}
          />
        </div>
        <div className={style.locationinput}>
          <div>State/Province</div>
          <Input
            name="region"
            type="text"
            placeholder="State/Province"
            id="region"
            onChange={e => handleLocationChange(e)}
          />
        </div>
        {/* </div> */}
        <div className={style.locationinput}>
          <div>
            Country
            <span aria-hidden="true" className={style.required}>
              *
            </span>
          </div>
          <Input
            name="country"
            type="text"
            placeholder="Country"
            id="country"
            onChange={e => handleLocationChange(e)}
          />
        </div>
        <div className={style.locationinput}>
          <div>
            Zip/Postal Code
            <span aria-hidden="true" className={style.required}>
              *
            </span>
          </div>
          <Input
            name="zip"
            type="text"
            placeholder="Zip/Postal"
            id="zip"
            onChange={e => handleLocationChange(e)}
          />
        </div>
      </div>
      <div>
        Required Field
        <span aria-hidden="true" className={style.required}>
          *
        </span>
      </div>
    </Form>
  );
};

export default NewTripForm;
