import { createBrowserRouter } from "react-router-dom";
import { PageIndex } from "./pages";
import { PageResume } from "./pages/resume";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageIndex />,
  },
  {
    path: "/resume",
    element: <PageResume />,
  },
]);
