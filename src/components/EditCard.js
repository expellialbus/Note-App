import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

import { URL } from "../config";

const classes = {
  field: {
    "margin-top": 20,
    "margin-bottom": 20,
    display: "block",
  },
};

const EditCard = ({
  note,
  category,
  setTitle,
  setDetails,
  setCategory,
  titleError,
  detailsError,
}) => {
  return (
    <Container>
      <TextField
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        label="Note Title"
        defaultValue={note.title}
        color="secondary"
        fullWidth
        required
        sx={classes.field}
        error={titleError}
      />
      <TextField
        id="details"
        onChange={(e) => setDetails(e.target.value)}
        label="Details"
        color="secondary"
        defaultValue={note.details}
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
    </Container>
  );
};

export default EditCard;
