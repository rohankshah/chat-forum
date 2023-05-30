import React, { useState } from "react";
import moment from "moment/moment";
import { Box, Typography } from "@mui/material";

function PostTemplate(props) {
  return (
    <Box
      sx={{
        border: "2px solid white",
        borderRadius: "20px",
        p: "25px",
        mb: "15px",
      }}
    >
      <Typography sx={{ color: "white", fontWeight: "bold", mb: "5px" }}>
        {props.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          mb: "10px",
        }}
      >
        <Typography sx={{ color: "white" }} variant="caption">
          Created by: {props.userId}
        </Typography>
        <Typography sx={{ color: "white" }} variant="caption">
          {moment.unix(props.timestamp).format("lll")}
        </Typography>
      </Box>
      <Typography sx={{ color: "white" }} variant="body1">
        {props.body.substring(0, 350).length > 0
          ? props.body.substring(0, 400) + "..."
          : props.body.substring(0, 400)}
      </Typography>
    </Box>
  );
}

export default PostTemplate;
