import React, { useState, useEffect } from 'react';
import HistoricalEntry from './historicalEntry.jsx';
import Pagination from './pagination.jsx';

export default ({ historicalEntries, offsetCallback, numberOfPages, searchQuery, editCallback }) => {
  return (
    <div>
      <h2 id={historicalEntries.length ? 'validated-title' : null}>Historical Entries for {searchQuery}</h2>
      {historicalEntries.length ?
        <ul id='historical-event-list'>
          {historicalEntries.map((entry, i) => {
            return <HistoricalEntry key={i} entry={entry} editCallback={editCallback} />
          })}
          <Pagination numberOfPages={numberOfPages} offsetCallback={offsetCallback} />
        </ul>
        : null}
    </div>
  )
};