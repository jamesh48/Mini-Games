import React from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import type { Mark } from 'GameStore';

export default ({ mark, ...props }: SvgIconProps & { mark: Mark }) => (
  mark === 'X'
    ? <CloseRoundedIcon color='primary' {...props} />
    : <RadioButtonUncheckedRoundedIcon color='secondary' {...props} />
);
