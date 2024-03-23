import React from "react";

import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Header } from "./header";
import { Footer } from "./footer";
import getLPTheme from "../_theme";
import { Outlet } from "react-router-dom";
const mode = "light"; // "dark";

const LPtheme = createTheme(getLPTheme(mode));

export function Layout() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={LPtheme}>
        <CssBaseline />
        <Header title="Steve Jenkins" />
        <Container maxWidth="lg">
          <main>
            <Outlet />
          </main>
        </Container>
        <Footer title="" description="" />
      </ThemeProvider>
    </React.StrictMode>
  );
}
