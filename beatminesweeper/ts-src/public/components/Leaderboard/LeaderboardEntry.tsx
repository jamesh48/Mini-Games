import React from 'react';
import { useGlobalContext } from 'GlobalStore';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface LeaderboardEntryProps {
  personalized: (string | boolean),
  handleClick: (e: React.MouseEvent<HTMLElement>) => void,
  entry: {username: string, time: number},
  index: number,
  currentPage: number,
  formatTime: (time: number) => string,
};

const LeaderboardEntry: React.FC<LeaderboardEntryProps> = ({
  personalized, handleClick, entry: { username, time }, index, formatTime,
}) => {
  const [{ definedUserName }] = useGlobalContext();
  const isCurrentUser = definedUserName === username;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        px: 2,
        py: 0.75,
        borderBottom: (t) => `1px solid ${t.palette.secondary.dark ?? 'rgba(0,0,0,0.2)'}`,
        cursor: personalized ? 'default' : 'pointer',
        transition: 'background-color 0.15s',
        '&:hover': {
          bgcolor: 'action.hover',
          '& .entry-text': { color: 'info.main' },
        },
      }}
    >
      <Typography
        className="entry-text"
        variant="body2"
        sx={{
          color: isCurrentUser ? 'primary.main' : 'text.primary',
          minWidth: '2.2em',
          fontWeight: 700,
          transition: 'color 0.15s',
        }}
      >
        {index + 1}.
      </Typography>

      <Typography
        className="entry-text"
        variant="body2"
        onClick={handleClick}
        sx={{
          color: isCurrentUser ? 'primary.main' : 'text.primary',
          flex: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          mx: 1,
          fontWeight: isCurrentUser ? 700 : 400,
          transition: 'color 0.15s',
        }}
      >
        {username}
      </Typography>

      <Typography
        className="entry-text"
        variant="body2"
        sx={{
          color: isCurrentUser ? 'primary.main' : 'text.secondary',
          whiteSpace: 'nowrap',
          fontVariantNumeric: 'tabular-nums',
          fontFamily: '"Roboto Mono", monospace',
          transition: 'color 0.15s',
        }}
      >
        {formatTime(time)}
      </Typography>
    </Box>
  );
};

export default LeaderboardEntry;
