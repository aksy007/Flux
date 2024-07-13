import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../component/home";
import About from "../component/about";
import { NotFound } from "../component/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: rootLoader,
    children: [
      {
        path: "home",
        element: <Home />,
        // loader: teamLoader,
      },
      {
        path: "about",
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
