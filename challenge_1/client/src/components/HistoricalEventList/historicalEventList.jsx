import React, { useState, useEffect } from 'react';
import HistoricalEntry from './historicalEntry.jsx';
import Pagination from './pagination.jsx';

export default ({ historicalEntries, offsetCallback, numberOfPages }) => {

  return (
    <ul>
      {historicalEntries.map((entry, i) => {
        return <HistoricalEntry key={i} entry={entry} />
      })}
      <Pagination numberOfPages={numberOfPages} offsetCallback={offsetCallback} />
    </ul>
  )
};