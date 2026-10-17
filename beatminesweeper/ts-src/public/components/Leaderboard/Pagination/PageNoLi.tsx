import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { HandleClickPageFunc } from "../leaderboard-types";

interface PageNoLiProps {
  pageIndex: number;
  currentPage: number;
  handleClick: HandleClickPageFunc;
}

const PageNoLi: React.FC<PageNoLiProps> = ({ pageIndex, currentPage, handleClick }) => {
  const selected = currentPage + 1 === pageIndex;

  return (
    <Box
      component="li"
      onClick={handleClick as React.MouseEventHandler<HTMLLIElement>}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: (t) => `0.5px solid ${t.palette.primary.main}`,
        bgcolor: selected ? 'action.hover' : 'transparent',
        cursor: 'pointer',
        minWidth: '2em',
        transition: 'background-color 0.15s',
        '&:hover': { bgcolor: 'action.hover' },
      }}
    >
      <Typography
        variant="caption"
        sx={{ color: selected ? 'primary.main' : 'text.primary', px: 0.75, py: 0.25 }}
      >
        {pageIndex}
      </Typography>
    </Box>
  );
};

export default PageNoLi;
