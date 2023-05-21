import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main.jsx";
import Home from "./Layout/Home.jsx";
import Login from "./Components/Pages/Login/Login.jsx";
import Registration from "./Components/Pages/Login/Registration.jsx";
import AuthProvider from "./Components/Providers/AuthProvider.jsx";
import AddToy from "./Components/Pages/AddToy/AddToy";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import MyToys from "./Components/Pages/MyToys/MyToys";
import ToyDetails from "./Components/Pages/Home/Shop/ToyDetails";
import UpdateToy from "./Components/Pages/MyToys/UpdateToy/UpdateToy";
import AllToys from "./Components/Pages/AllToys/AllToys";
import NotFound from "./Components/Pages/NotFound/NotFound";
import AddTestimonial from "./Components/Pages/Home/Testimonials/AddTestimonial";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/addtoy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/updatetoy/:id",
        element: (
          <PrivateRoute>
            <UpdateToy></UpdateToy>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://toyland-treasures-server.vercel.app/toys/${params.id}`
          );
        },
      },
      {
        path: "/viewtoy/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://toyland-treasures-server.vercel.app/toys/${params.id}`
          );
        },
      },
      {
        path: "/addtestimonial",
        element: <AddTestimonial></AddTestimonial>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
