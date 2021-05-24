import React from 'react';

export default ({ entry }) => {
  return (
    <li className='historical-entry'>
      <div>
        <h4>Entry</h4>
        <p>Date: {entry.date}</p>
        <p>Description: {entry.description}</p>
      </div>
    </li>
  )
};