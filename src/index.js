import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import { app } from "./firebaseConfig";
import "./index.css";
import { red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    one: {
      main: "#000000",
    },
    two: {
      main: "#fd5e09",
    },
    three: {
      main: "#e0e0e0",
    },
    four: {
      main: "#fdc959",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);
