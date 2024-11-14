import "./index.css";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "project",
    element: <Project />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
