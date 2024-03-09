import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import { RouterProvider } from "react-router-dom";
import { router } from "./_router";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import "./app.css";
import getLPTheme from "./_theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const mode = "dark";

const LPtheme = createTheme(getLPTheme(mode));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Steve Jenkins" />
        <main>
          <RouterProvider router={router} />
        </main>
      </Container>
      <Footer title="" description="" />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
