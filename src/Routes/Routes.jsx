import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import CardDetails from "../pages/Home/Advertisement/CardDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: 'cardDetails',
        element: <CardDetails></CardDetails>
      }
    ],
  },
]);
