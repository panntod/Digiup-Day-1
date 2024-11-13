import "./index.css"
import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Calculator from "./pages/Calculator";
import Greeting from "./pages/Greeting";
import Counter from "./pages/Counter";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
      </div>
    ),
  },
  {
    path: "calculator",
    element: <Calculator />,
  },
  {
    path: "greeting",
    element: <Greeting />,
  },
  {
    path: "counter",
    element: <Counter />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
