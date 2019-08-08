import React from "react";
import JournalEntry from "./JournalEntryContainer";
import style from "./JournalListStyles.modules.css";

const JournalList = ({ abc }) => {
  console.log("JOURNALENTRY", abc);
  const entries = abc.map(entry => (
    <JournalEntry
      key={entry._id}
      id={entry._id}
      title={entry.title}
      published_on={entry.published_on}
      description={entry.body}
    />
  ));

  return <div className={style.container}>{entries}</div>;
};

export default JournalList;
