import React, { Fragment } from 'react';
import style from './JournalEntryStyles.module.css';
import EditJournalForm from "./EditJournalForm/EditJournalFormContainer"

const journalEntry = ( props ) => {
  const {
    id,
    title,
    date,
    description,
    selectEntry,
    activeEntry,
  } = props;

  const handleSelect = () => selectEntry( id, title, date, description );
  
  return (
    <Fragment>  
    { 
      activeEntry === id ? 
      <EditJournalForm /> :
      id &&
      <div
        className={style.entry}
        onClick={handleSelect}
      >
        <h1 className={style.title}>
          {title}
        </h1>
        <h5>
          {date}
        </h5>
        <p className={style.description}>
          {description}
        </p>
      </div>
    }
    </Fragment>
  );

};

export default journalEntry;
