import Navbar from "../components/Navbar";
import { Box, Button, Container } from "@mui/material";
import { React, useState } from "react";

function MainFeed() {
  return (
    <div style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
      <Navbar />
      <Container>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button variant="outlined">Filter</Button>
          <Button variant="contained">Create Post</Button>
        </Box>
      </Container>
    </div>
  );
}

export default MainFeed;
