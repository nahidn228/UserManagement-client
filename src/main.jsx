import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UpdateUser from "./components/UpdateUser";
import "./index.css";
import AuthProvider from "./providers/AuthProvider";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://user-management-server-cyan.vercel.app/user"),
      },
      {
        path: "/users",
        element: <AllUsers></AllUsers>,
        loader: () =>
          fetch("https://user-management-server-cyan.vercel.app/authUser"),
      },
      {
        path: "/add",
        element: <AddUser></AddUser>,
      },
      {
        path: "/update/:id",
        element: <UpdateUser></UpdateUser>,
        loader: ({ params }) =>
          fetch(
            `https://user-management-server-cyan.vercel.app/user/${params.id}`
          ),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
