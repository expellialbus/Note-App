import { useState } from "react";

import { DeleteOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { Collapse } from "@mui/material";
import { pink, yellow, blue, green, grey } from "@mui/material/colors";
import { Box } from "@mui/material";

import Create from "../pages/Create";

const getColor = (category) => {
  switch (category) {
    case "work":
      return yellow[700];
    case "todo":
      return pink[500];
    case "reminder":
      return blue[500];
    case "meeting":
      return green[500];
    default:
      return grey[700];
  }
};

const styles = (note) => ({
  border: {
    borderRadius: 5,
    border: "1px solid" + " " + getColor(note.category),
    ":hover": {
      boxShadow: 15,
    },
  },

  button: {
    color: grey[700],
  },

  avatar: {
    backgroundColor: getColor(note.category),
  },
});

const NoteCard = ({ note, handleDelete }) => {
  const classes = styles(note);

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <Card elevation={1} sx={classes.border}>
        <CardHeader
          avatar={
            <Avatar sx={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton
              onClick={() => handleDelete(note.id)}
              sx={classes.button}
            >
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            sx={(theme) => ({
              marginLeft: expanded ? "auto" : "none",
              color: classes.button,
              transition: theme.transitions.create("transform", {
                duration: theme.transitions.duration.shortest,
              }),
            })}
            onClick={handleExpandClick}
          >
            {expanded ? "Submit" : "Edit"}
          </Button>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Create />
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

export default NoteCard;
