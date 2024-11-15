import "./index.css";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Pages
import Counter from "./pages/Counter";
import Todo from "./pages/Todo/Home";
import TodoForm from "./pages/Todo/Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Counter />,
  },
  {
    path: "todo",
    element: <Outlet />,
    children: [
      { index: true, element: <Todo /> },
      {
        path: "add",
        element: <TodoForm />,
      },
      {
        path: "edit/:id",
        element: <TodoForm />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
