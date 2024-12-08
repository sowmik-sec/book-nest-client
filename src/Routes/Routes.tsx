import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/auth/Signin";
import Signup from "../Pages/auth/Signup";
import AllBooks from "../Pages/AllBooks/AllBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/books",
        element: <AllBooks />,
      },
    ],
  },
]);
