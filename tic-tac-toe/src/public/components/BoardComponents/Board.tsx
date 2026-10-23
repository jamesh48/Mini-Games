import React from 'react';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Paper from '@mui/material/Paper';
import { alpha } from '@mui/material/styles';
import { useGameContext, useConnectionContext, playerLabel } from 'GameStore';
import MarkIcon from 'Components/MarkIcon';

// The board is a square as big as the space it's given: the wrapper is a size container,
// so 100cqw/100cqh are the room available and the smaller of the two wins
const boardSize = 'min(100cqw, 100cqh)';
const markSize = `calc(${boardSize} * 0.2)`;

export default () => {
  const [{ board, currentPlayer, result, playerNames }, dispatch] = useGameContext();
  const { canPlay } = useConnectionContext();
  const winningLine = result?.kind === 'win' ? result.line : null;
  const myTurn = !result && canPlay(currentPlayer);

  return (
    <Box sx={{ height: '100%', width: '100%', containerType: 'size', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper id='board' elevation={2} sx={{ width: boardSize, height: boardSize, maxWidth: 520, maxHeight: 520, p: { xs: 1, sm: 1.5 } }}>
        <Box role='grid' aria-label='Tic tac toe board' sx={{
          height: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gridTemplateRows: 'repeat(3, minmax(0, 1fr))',
          gap: { xs: 1, sm: 1.5 }
        }}>
          {board.map((cell, index) => {
            const isWinning = winningLine?.includes(index) ?? false;
            const isPlayable = cell === null && myTurn;
            const row = Math.floor(index / 3) + 1;
            const column = (index % 3) + 1;

            return (
              <ButtonBase
                key={index}
                id={`box-${index}`}
                className='boxes'
                role='gridcell'
                aria-label={cell
                  ? `Row ${row}, column ${column}: ${cell}`
                  : `Row ${row}, column ${column}: empty${isPlayable ? `, play ${playerLabel(playerNames, currentPlayer)}` : ''}`}
                disabled={!isPlayable}
                onClick={() => dispatch({ type: 'PLAY MOVE', index })}
                sx={(theme) => ({
                  borderRadius: 2,
                  bgcolor: isWinning ? alpha(theme.palette.success.main, 0.18) : theme.palette.action.hover,
                  outline: isWinning ? `3px solid ${theme.palette.success.main}` : 'none',
                  transition: theme.transitions.create('background-color'),
                  '& .preview': { opacity: 0, transition: theme.transitions.create('opacity') },
                  '@media (hover: hover)': {
                    '&:hover': { bgcolor: theme.palette.action.selected },
                    '&:hover .preview': { opacity: 0.25 }
                  },
                  '&.Mui-focusVisible': { outline: `3px solid ${theme.palette.primary.light}` },
                  '&.Mui-focusVisible .preview': { opacity: 0.25 }
                })}
              >
                {cell
                  ? <MarkIcon mark={cell} sx={{ fontSize: markSize }} />
                  : isPlayable && <MarkIcon mark={currentPlayer} className='preview' sx={{ fontSize: markSize }} />}
              </ButtonBase>
            );
          })}
        </Box>
      </Paper>
    </Box>
  );
};
