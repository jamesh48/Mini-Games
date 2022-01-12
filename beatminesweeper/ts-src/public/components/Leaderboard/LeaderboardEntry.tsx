import React from 'react';
import { useGlobalContext } from 'GlobalStore';

interface LeaderboardEntryProps {
  personalized: (string | boolean),
  handleClick: () => void,
  entry: {username: string, time: string},
  index: number,
  formatTime: (time: string) => string
};

const LeaderboardEntry: React.FC<LeaderboardEntryProps> = ({
  personalized, handleClick, entry: { username, time }, index, formatTime }) => {
  const [{ definedUserName }] = useGlobalContext();

  const golden = (definedUserName === username);

  return (
    <div key={index} className={personalized ? 'personalized scores-list' : 'scores-list'}>
      {/* Number */}
      <h5 className={golden ? 'golden scores-user' : 'scores-user'} style={{ paddingRight: '5px' }}>
        {index + 1}.
      </h5>
      {/* Name */}
      <h5 onClick={handleClick} className={golden ? 'golden scores-user' : 'scores-user'}>
        {username}
      </h5>
      {/* Vertical line */}
      <h5 className={golden ? 'golden scores-user' : 'black-num scores-user'}> | </h5>
      {/* Time */}
      <h5 className={golden ? 'golden scores-time' : 'scores-time'}>
        {formatTime(time)}
      </h5>
    </div>
  )
}

export default LeaderboardEntry;