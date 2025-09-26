import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

function Root() {
  const [mode, setMode] = useState("dark"); // light/dark mode

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#0288d1" },
          secondary: { main: "#d32f2f" },
          background: {
            default:
              mode === "dark" ? "rgb(15, 22, 36)" : "rgb(242, 245, 247)", // dark/light bg
          },
          text: {
            primary:
              mode === "dark" ? "rgb(242, 245, 247)" : "rgb(15, 22, 36)", // dark/light text
          },
        },
        typography: {
          fontFamily: '"Space Grotesk", sans-serif', // custom font
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App mode={mode} setMode={setMode} />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
