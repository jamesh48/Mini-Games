import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import { tokenColors } from "../theme.js";

interface PlayerCardTypes {
  color: string;
  name: string;
  wins: number;
  active: boolean;
  isYou: boolean;
  editable: boolean;
  online: boolean;
  handleRename: (name: string) => void;
}

const PlayerCard: React.FC<PlayerCardTypes> = ({
  color,
  name,
  wins,
  active,
  isYou,
  editable,
  online,
  handleRename
}) => {
  const [draft, setDraft] = useState<string | undefined>(undefined);
  const editing = draft !== undefined;

  const save = () => {
    if (draft !== undefined && draft.trim() !== name) {
      handleRename(draft.trim());
    }
    setDraft(undefined);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        flex: 1,
        minWidth: 0,
        borderColor: active ? tokenColors[color].main : "divider",
        borderWidth: 2,
        boxShadow: active ? `0 0 16px ${tokenColors[color].main}55` : "none",
        transition: "border-color 200ms, box-shadow 200ms"
      }}
    >
      <CardContent sx={{ p: { xs: 1.5, sm: 2 }, "&:last-child": { pb: { xs: 1.5, sm: 2 } } }}>
        <Stack direction="row" spacing={{ xs: 1, sm: 1.5 }} alignItems="center">
          <Avatar
            sx={{ display: { xs: "none", sm: "flex" }, bgcolor: tokenColors[color].main, color: "#0b1426", opacity: online ? 1 : 0.4 }}
          >
            <PersonIcon />
          </Avatar>
          <div style={{ flex: 1, minWidth: 0 }}>
            {editing ? (
              <InputBase
                autoFocus
                value={draft}
                placeholder={color === "red" ? "Red" : "Yellow"}
                onChange={(event) => setDraft(event.target.value)}
                onBlur={save}
                onKeyDown={(event) => {
                  if (event.key === "Enter") save();
                  if (event.key === "Escape") setDraft(undefined);
                }}
                inputProps={{ maxLength: 20, "aria-label": "Player name" }}
                sx={{
                  width: "100%",
                  fontWeight: 700,
                  borderBottom: 2,
                  borderColor: tokenColors[color].main
                }}
              />
            ) : (
              <Stack direction="row" alignItems="center" spacing={0.5}>
                {/* Long names wrap instead of being cut off */}
                <Typography variant="subtitle1" fontWeight={700} sx={{ minWidth: 0, overflowWrap: "anywhere", lineHeight: 1.3 }}>
                  {name}
                </Typography>
                {editable && (
                  <Tooltip title="Edit name">
                    <IconButton size="small" onClick={() => setDraft(name)} aria-label="Edit name">
                      <EditIcon fontSize="inherit" />
                    </IconButton>
                  </Tooltip>
                )}
              </Stack>
            )}
            <Typography variant="body2" color="text.secondary">
              {isYou && "You · "}
              {wins} {wins === 1 ? "win" : "wins"}
              {!online && " · not connected"}
            </Typography>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
