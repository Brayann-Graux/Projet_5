import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./Styles/index.css";
import {About} from './pages/About';
import {ErrorPage} from './pages/ErrorPage';
import {Home} from './pages/Home';
import {HouseCard} from './pages/HouseCard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/errorpage",
    element: <ErrorPage />,
  },
  {
    path: "/housecard",
    element: <HouseCard />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);