import React from "react";
import { Box, Typography } from "@mui/material";

function CommentBox(props) {
  return (
    <Box
      sx={{
        border: "1px solid white",
        borderRadius: "20px",
        p: "10px 20px",
        mb: "15px",
      }}
    >
      <p style={{ color: "white", fontSize: "13px", marginBottom: "10px" }}>
        {props.userId} . {props.timestamp}
      </p>
      <Typography sx={{ color: "white", fontSize: "16px" }}>
        {props.body}
      </Typography>
    </Box>
  );
}

export default CommentBox;
