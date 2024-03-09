import { createBrowserRouter } from "react-router-dom";
import { PageIndex } from "./pages/_index";
import { PageResume } from "./pages/resume";

export const router = createBrowserRouter([
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
]);
