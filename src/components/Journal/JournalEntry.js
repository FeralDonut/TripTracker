import React, { Fragment } from "react";
import style from "./JournalEntryStyles.module.css";
import moment from "moment";
import EditJournalForm from "./EditJournalForm/EditJournalFormContainer";

const JournalEntry = props => {
  const {
    id,
    title,
    published_on,
    description,
    tripID,
    selectEntry,
    activeEntry,
    apiCall
  } = props;

  const date = moment(published_on).format("MM DD YYYY");
  const handleSelect = () => selectEntry(id, title, date, description);

  return (
    <Fragment>
      {activeEntry === id ? (
        <EditJournalForm blogID={id} tripID={tripID} apiCall={apiCall} />
      ) : (
        id && (
          <div className={style.entry} onClick={handleSelect}>
            <h1 className={style.title}>{title}</h1>
            <h5>{date}</h5>
            <p className={style.description}>{description}</p>
          </div>
        )
      )}
    </Fragment>
  );
};

export default JournalEntry;
