import React, { useState, useEffect } from 'react';

export default ({ pinMap, sweepBarPosition, pinsClientHeight }) => {
  return (
    <div style={{ bottom: `${sweepBarPosition}px` }} ref={pinsClientHeight} id='pin-container'>
      {
        pinMap.reduce((total, row, index, arr) => {
          return [...total, <div className='pin-row' id={'row-' + index} key={index}>
            {
              row.map((pin, pinDex) => {
                return !pinMap[index][pinDex] ? <span className='pin' key={pinDex}><p></p></span> : <span className='pin pin-down' key={pinDex}><p>X</p></span>;
              })
            }
          </div>]
        }, [])
      }
    </div>
  )
}