import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Typography, TextField } from "@mui/material";
import { createNewPost } from "../actions/post-actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "three.main",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ModalBox(props) {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handlePostCreate() {
    dispatch(createNewPost({ title, body }));
    setTitle("");
    setBody("");
  }

  useEffect(() => {}, []);

  return (
    <Box sx={style}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography>Create Post</Typography>
        <TextField
          label="Title*"
          placeholder="Enter Title"
          type="text"
          size="small"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Body*"
          placeholder="Enter post content"
          type="text"
          size="small"
          multiline
          rows={4}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <Box
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "10em",
              backgroundColor: "four.main",
              color: "one.main",
            }}
            onClick={() => handlePostCreate()}
          >
            Create
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "10em",
              marginLeft: "1em",
              backgroundColor: "one.main",
            }}
            onClick={() => props.close()}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ModalBox;
