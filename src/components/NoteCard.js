import { DeleteOutlined } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { pink, yellow, blue, green, grey } from "@mui/material/colors";
import { Box } from "@mui/material";

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

const NoteCard = ({ note }) => {
  const classes = styles(note);

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
            <IconButton sx={classes.button}>
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
      </Card>
    </Box>
  );
};

export default NoteCard;
