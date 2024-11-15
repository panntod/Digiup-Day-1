import "./index.css";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Counter from "./pages/Counter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Counter />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
