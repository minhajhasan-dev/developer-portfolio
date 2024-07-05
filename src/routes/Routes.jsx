import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AboutMe from "../pages/AboutMe";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "about-me",
        element: <AboutMe />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);

export default router;
