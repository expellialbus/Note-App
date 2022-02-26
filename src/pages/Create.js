import { useState } from "react";

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

const handleSubmit = (e) => {
  e.preventDefault();
};

const classes = {
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
};

const Create = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("todos");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

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
          style={classes.field}
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
          sytle={classes.field}
          error={detailsError}
        />
        <FormControl style={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              label="Todos"
              control={<Radio color="secondary" />}
              value="todos"
            />
            <FormControlLabel
              label="Reminders"
              control={<Radio color="secondary" />}
              value="reminders"
            />
            <FormControlLabel
              label="Work"
              control={<Radio color="secondary" />}
              value="work"
            />
            <FormControlLabel
              label="Meetings"
              control={<Radio color="secondary" />}
              value="meetings"
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
