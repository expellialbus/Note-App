import { useEffect, useState } from "react";

import { Masonry } from "@mui/lab";
import { Box, Container } from "@mui/material";

import { URL } from "../config";
import NoteCard from "../components/NoteCard";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(
    () =>
      fetch(URL)
        .then((response) => response.json())
        .then((data) => setNotes(data))
        .catch((error) => console.log(error)),
    []
  );

  const handleDelete = async (id) => {
    await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });

    const remainNotes = notes.filter((note) => note.id != id);

    setNotes(remainNotes);
  };

  return (
    <Container>
      <Masonry columns={{ xs: 1, md: 2, lg: 4 }} spacing={3}>
        {notes.map((note) => (
          <Box key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Box>
        ))}
      </Masonry>
    </Container>
  );
};

export default Notes;
