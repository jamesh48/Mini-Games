import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Switch from '@mui/material/Switch';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import GridOnRoundedIcon from '@mui/icons-material/GridOnRounded';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import { useConnectionContext } from 'GameStore';
import InviteLink from './InviteLink';

export default () => {
  const { connection: { connected, isHost, online, tunnel }, setOnline } = useConnectionContext();
  const [linkAnchor, setLinkAnchor] = useState<HTMLElement | null>(null);

  return (
    <AppBar position='static' color='inherit' elevation={0} sx={{ borderBottom: 1, borderColor: 'divider', pt: 'env(safe-area-inset-top)' }}>
      <Toolbar variant='dense' sx={{ gap: 1 }}>
        <GridOnRoundedIcon color='primary' />
        <Typography variant='h6' component='h1' fontWeight={900} letterSpacing={-0.5} noWrap sx={{ flexGrow: 1, minWidth: 0 }}>
          Tic Tac Toe
        </Typography>

        {isHost && online && tunnel.status === 'ready' && tunnel.url && (
          <>
            <Tooltip title='Show invite link'>
              <IconButton id='show-link-button' color='inherit' aria-label='Show invite link' onClick={(event) => setLinkAnchor(event.currentTarget)}>
                <LinkRoundedIcon />
              </IconButton>
            </Tooltip>
            <Popover
              open={!!linkAnchor}
              anchorEl={linkAnchor}
              onClose={() => setLinkAnchor(null)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              PaperProps={{ sx: { p: 1.5, width: 340, maxWidth: 'calc(100vw - 32px)' } }}
            >
              <Typography variant='body2' color='text.secondary' mb={1}>Send this link to your opponent:</Typography>
              <InviteLink url={tunnel.url} />
            </Popover>
          </>
        )}

        {/* Only the computer running the server can switch online play */}
        {isHost && (
          <FormControlLabel
            label={<><Box component='span' sx={{ display: { xs: 'none', sm: 'inline' } }}>Play </Box>online</>}
            control={
              <Switch
                id='online-switch'
                checked={online}
                disabled={!connected || tunnel.status === 'starting'}
                onChange={(event) => setOnline(event.target.checked)}
              />
            }
            sx={{ mr: 0, '& .MuiFormControlLabel-label': { whiteSpace: 'nowrap' } }}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};
