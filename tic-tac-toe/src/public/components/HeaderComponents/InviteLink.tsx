import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';

// A one-line link with a copy button; long addresses are shortened with "…" and the button copies the full link
export default ({ url }: { url: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  };

  return (
    <Box className='invite-link' sx={{ display: 'flex', alignItems: 'center', gap: 0.5, pl: 1.5, borderRadius: 2, bgcolor: 'action.hover' }}>
      <Typography component='a' href={url} target='_blank' rel='noreferrer' variant='body2' noWrap title={url}
        sx={{ flex: 1, minWidth: 0, fontWeight: 600, color: 'inherit' }}>
        {url.replace(/^https?:\/\//, '')}
      </Typography>
      <Tooltip title={copied ? 'Copied!' : 'Copy link'}>
        <IconButton size='small' color='inherit' onClick={copy} aria-label='Copy link'>
          {copied ? <CheckRoundedIcon fontSize='small' /> : <ContentCopyRoundedIcon fontSize='small' />}
        </IconButton>
      </Tooltip>
    </Box>
  );
};
