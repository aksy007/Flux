import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../components/About";
import { NotFound } from "../components/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        path: "project/*",
        element: <About />,
        // loader: teamLoader,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
