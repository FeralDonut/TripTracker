import React from "react";
import JournalEntry from "./JournalEntryContainer";
import style from "./JournalListStyles.modules.css";

const JournalList = ({ posts, apiCall, tripID }) => {
  const entries = posts.blog.map(entry => (
    <JournalEntry
      key={entry._id}
      id={entry._id}
      title={entry.title}
      published_on={entry.published_on}
      description={entry.body}
      tripID={tripID}
      apiCall={apiCall}
    />
  ));

  return <div className={style.container}>{entries}</div>;
};

export default JournalList;
