import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "1.875rem",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          background: "var(--twitter-color)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          borderRadius: "30px",
          fontWeight: 900,
          height: 50,
          border: "none",
          marginTop: 20,
          "&:hover": {
            color: "var(--twitter-color)",
            border: "var(--twitter-color) 1px solid",
          },
        },
      },
    },
  },
});
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
