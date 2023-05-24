import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Box, TextField, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import { updateUserProfile, getUserProfile } from "../actions/profile-actions";

function ProfilePage() {
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
    dispatch(getUserProfile);
  }, []);

  function handleSave() {
    dispatch(updateUserProfile((fullName, country, bio)));
    setFullName("");
    setCountry("");
    setBio("");
  }

  return (
    <div style={{ backgroundColor: "#000000", minHeight: "100vh" }}>
      <div ref={ref}>
        <Navbar />
      </div>
      <Container>
        <Box sx={{ minheight: `calc(100vh-${height}` }}>
          <img
            src="https://images.unsplash.com/photo-1684638729698-f943a755c16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Profile Pic"
            style={{ borderRadius: "100%", height: "13em", width: "13em" }}
          ></img>
          <Box
            sx={{
              width: { xs: "100%", sm: "20em" },
              p: 2,
              backgroundColor: "four.main",
            }}
          >
            <TextField
              type="text"
              sx={{ width: "100%", mb: 2 }}
              label="Full Name"
              size="small"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <TextField
              type="text"
              sx={{ width: "100%", mb: 2 }}
              label="Country"
              size="small"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <TextField
              type="text"
              sx={{ width: "100%", mb: 2 }}
              label="Bio"
              multiline
              rows={4}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
            <Button
              variant="filled"
              sx={{ backgroundColor: "one.main", color: "#ffffff" }}
              onClick={() => handleSave()}
            >
              Save Changes
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default ProfilePage;
