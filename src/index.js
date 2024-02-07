import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom";
import ErrorPage from "./error-page";
import MovingButton from './moving-button'
import Countries from "./countries";
import Contacts from './contacts'

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Countries/>,
    errorElement: <ErrorPage />,
  },
  {
    path:'/contacts',
    element: <Contacts/>,
    errorElement: <ErrorPage />,
  },
  {
    path:'/button',
    element: <MovingButton/>,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


