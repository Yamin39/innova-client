import { createBrowserRouter } from "react-router-dom";
import RoomDetails from "../components/general/RoomDetails/RoomDetails";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyBookings from "../pages/MyBookings/MyBookings";
import Register from "../pages/Register/Register";
import Rooms from "../pages/Rooms/Rooms";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
      },
      {
        path: "/room-details/:id",
        element: <RoomDetails></RoomDetails>,
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
