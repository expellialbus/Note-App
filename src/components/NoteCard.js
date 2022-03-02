import { useEffect, useState } from "react";

import {
  BeenhereOutlined,
  DeleteOutlined,
  ModeEditOutlined,
} from "@mui/icons-material";
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

import EditCard from "./EditCard";
import { URL } from "../config";

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

  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const [category, setCategory] = useState(note.category);
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setTitleError(false);
    setDetailsError(false);

    if (title.trim() == "") {
      setTitleError(true);
    }

    if (details.trim() == "") {
      setDetailsError(true);
    }
  }, [title, details]);

  const handleSave = () => {
    if (!titleError && !detailsError) {
      setExpanded(!expanded);

      fetch(`${URL}/${note.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          details,
          category,
        }),
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) => console.log(error));
    }
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
            onClick={handleSave}
            endIcon={expanded ? <BeenhereOutlined /> : <ModeEditOutlined />}
          >
            {expanded ? "Save" : "Edit"}
          </Button>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <EditCard
              note={note}
              category={category}
              setTitle={setTitle}
              setDetails={setDetails}
              setCategory={setCategory}
              titleError={titleError}
              detailsError={detailsError}
            />
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

export default NoteCard;
