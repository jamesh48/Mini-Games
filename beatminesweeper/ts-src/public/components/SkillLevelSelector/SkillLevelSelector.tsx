import React from 'react';
import { useGlobalContext } from 'GlobalStore';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const LEVELS = [
  { label: 'Beginner', action: 'SET BEGINNER DIMENSIONS', value: 'beginner' },
  { label: 'Intermediate', action: 'SET INTERMEDIATE DIMENSIONS', value: 'intermediate' },
  { label: 'Expert', action: 'SET ADVANCED DIMENSIONS', value: 'advanced' },
] as const;

export default React.memo(() => {
  const [{ dimensions: { skillLevel } }, globalDispatch] = useGlobalContext();

  return (
    <Stack
      direction="row"
      sx={{ justifyContent: 'center', flexWrap: 'wrap', gap: 1, py: 1.5 }}
    >
      {LEVELS.map(({ label, action, value }) => (
        <Button
          key={value}
          variant={skillLevel === value ? 'contained' : 'outlined'}
          color="primary"
          size="small"
          onClick={() => globalDispatch({ type: action as any })}
        >
          {label}
        </Button>
      ))}
    </Stack>
  );
});
