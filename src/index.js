import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import App from "./App";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/home/contact",
        element: <Contact />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "/home/portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
