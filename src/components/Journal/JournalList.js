import React from 'react';
import JournalEntry from './JournalEntryContainer';
import style from './JournalListStyles.modules.css';

const JournalList = (props) => {
  
  const entries = props.journalEntry.map(entry =>(
    <JournalEntry
      key={entry.id}
      id={entry.id}
      description={entry.description}
    />    
  ));
  
  return(
    <div className={style.container} >
      {entries}
    </div>
  );
};

export default JournalList