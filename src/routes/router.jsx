import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import CompanyDetails from "../components/CompanyDetails/CompanyDetails";
import MyProfile from "../components/MyProfile/MyProfile";
import PrivateRoute from "./PrivateRoute";
import ForgotPass from "../components/ForgotPass/ForgotPass.JSX";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "forgot",
        element: <ForgotPass></ForgotPass>,
      },
      {
        path: "my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "company/:id",
        element: (
          <PrivateRoute>
            <CompanyDetails></CompanyDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
