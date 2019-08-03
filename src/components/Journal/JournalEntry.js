import React, { Fragment } from 'react';
import style from './JournalEntryStyles.module.css';
import EditJournalForm from "./EditJournalForm/EditJournalFormContainer"

const journalEntry = ( props ) => {
  const {
    id,
    description,
    selectEntry,
    activeEntry,
  } = props;

  const handleSelect = () => selectEntry( id, description );

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
        <p className={style.description}>
          {description}
        </p>
      </div>
    }
    </Fragment>
  );

};

export default journalEntry;
