import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// A one-line link with a copy button; long addresses are shortened with "…" and the button copies the full link
const InviteLink: React.FC<{ url: string }> = ({ url }) => {
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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        mt: 1,
        pl: 1.5,
        borderRadius: 2,
        bgcolor: "rgba(0, 0, 0, 0.25)"
      }}
    >
      <Typography
        component="a"
        href={url}
        target="_blank"
        rel="noreferrer"
        variant="body2"
        noWrap
        title={url}
        sx={{ flex: 1, minWidth: 0, fontWeight: 600, color: "inherit" }}
      >
        {url.replace(/^https?:\/\//, "")}
      </Typography>
      <Tooltip title={copied ? "Copied!" : "Copy link"}>
        <IconButton size="small" color="inherit" onClick={copy} aria-label="Copy link">
          {copied ? <CheckIcon fontSize="small" /> : <ContentCopyIcon fontSize="small" />}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default InviteLink;
