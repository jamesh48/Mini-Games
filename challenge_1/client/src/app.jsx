import React, { useState, useEffect } from 'react';
import SearchBar from './components/searchBar.jsx';
import HistoricalEventList from './components/HistoricalEventList/historicalEventList.jsx';
import axios from 'axios';

export default () => {
  const [historicalEntries, setHistoricalEntries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [offset, setOffset] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(async () => {
    const {data: {results, totalPages}} = await axios('/data', { params: { searchQuery, offset, limit: 10 } });
    setNumberOfPages(totalPages);
    setHistoricalEntries(results);
  }, [searchQuery, offset])

  const searchCallback = async (e) => {
    setSearchQuery(e.target.value);
  };

  const offsetCallback = (inboundOffset) => {
    setOffset(inboundOffset);
  }

  return (
    <div>
      <h4>Lets Find some Historical Events!</h4>
      <SearchBar searchCallback={searchCallback} />
      <HistoricalEventList historicalEntries={historicalEntries} offsetCallback={offsetCallback} numberOfPages={numberOfPages} />
    </div>

  )
}