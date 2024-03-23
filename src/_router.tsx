import { createBrowserRouter } from "react-router-dom";
import { PageIndex } from "./pages/_index";
import { PageResume } from "./pages/resume";
import { Layout } from "./components/_layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <PageIndex />,
        loader() {
          return {
            title: "Steve Jenkins",
          };
        },
      },
      {
        path: "/resume",
        element: <PageResume />,
        loader() {
          return {
            title: "Resume",
          };
        },
      },
    ],
  },
]);
