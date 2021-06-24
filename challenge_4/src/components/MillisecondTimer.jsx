import React, { useState, useEffect } from 'react';

export default ({ timerTime, timerOnCallback }) => {
  let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
  let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
  let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
  let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

  return (
    <div>
      <h4>
        {
          hours !== '00' ?
            `${hours} : ${minutes} : ${seconds} : ${centiseconds}`
            : minutes !== '00' ?
              `${minutes} : ${seconds} : ${centiseconds}`
              : `${seconds} : ${centiseconds}`
        }
      </h4>
    </div>
  )
}