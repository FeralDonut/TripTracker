import React from "react";
import CreateEntryForm from "./CreateEntryFormContainer";
import Button from "../Buttons/Button";
import style from "./CreateEntryStyles.module.css";

const CreateEntry = props => {
  const { id, tripID, addJournalEntry, apiCall } = props;

  return (
    <div>
      {id ? (
        <CreateEntryForm tripID={tripID} apiCall={apiCall} />
      ) : (
        <Button
          className={style.createEntry}
          onClick={() => addJournalEntry("new_entry")}
          text="Add a Journal Entry"
        />
      )}
    </div>
  );
};

export default CreateEntry;
