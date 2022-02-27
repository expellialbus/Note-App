import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { KeyboardArrowRight } from "@mui/icons-material";

import { URL } from "../config";

const classes = {
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
};

const Create = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("todo");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title.trim() == "") {
      setTitleError(true);
    }

    if (details.trim() == "") {
      setDetailsError(true);
    }

    if (title && details) {
      fetch(URL, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          details,
          category,
        }),
      })
        .then(() => navigate("/"))
        .catch((error) => console.log(error));
    }
  };

  return (
    <Container>
      <Typography component="h2" color="textSecondary" gutterBottom>
        Create a New Note
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          color="secondary"
          fullWidth
          required
          sx={classes.field}
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          sx={classes.field}
          error={detailsError}
        />
        <FormControl sx={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              label="Todo"
              control={<Radio color="secondary" />}
              value="todo"
            />
            <FormControlLabel
              label="Reminder"
              control={<Radio color="secondary" />}
              value="reminder"
            />
            <FormControlLabel
              label="Work"
              control={<Radio color="secondary" />}
              value="work"
            />
            <FormControlLabel
              label="Meeting"
              control={<Radio color="secondary" />}
              value="meeting"
            />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Create;
