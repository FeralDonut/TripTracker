import React from "react";
import CreateEateryForm from "../CreateEateryForm/CreateEateryFormContainer";
import Button from "../../Buttons/Button";
import style from "./CreateEateryStyles.module.css";

const CreateEatery = props => {
  const { id, addEatery, tripID, apiCall } = props;

  return (
    <div>
      {id ? (
        <CreateEateryForm tripID={tripID} apiCall={apiCall} />
      ) : (
        <Button
          className={style.create_eatery}
          onClick={() => addEatery()}
          text="+"
        />
      )}
    </div>
  );
};

export default CreateEatery;
