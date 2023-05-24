import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { setUserLogin } from "../actions/login-actions";

function LoginPage() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleLogin() {
    dispatch(setUserLogin(email, pass));
    setEmail("");
    setPass("");
  }

  return (
    <div style={{ backgroundColor: "#000000" }}>
      <Container sx={{ height: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              height: { xs: "45%", md: "45%" },
              width: { xs: "100%", sm: "18em" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 2,
            }}
          >
            <Typography variant="h5" sx={{ mb: 3 }}>
              Login
            </Typography>
            <TextField
              type="text"
              sx={{ width: "100%", mb: 3 }}
              label="Email"
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              sx={{ width: "100%", mb: 3 }}
              label="Password"
              size="small"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <Button
              sx={{
                mb: 3,
                width: "100%",
                backgroundColor: "two.main",
                color: "#ffffff",
              }}
              variant="contained"
              onClick={() => handleLogin()}
            >
              Login
            </Button>
            <Typography>Don't have an account? SignUp</Typography>
          </Paper>
        </Box>
      </Container>
    </div>
  );
}
export default LoginPage;
