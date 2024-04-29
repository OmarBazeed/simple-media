import AdminDashboard from "../Admin/components/AdminDashboard/AdminDashboard";
import LoginLayout from "../components/layouts/login/LoginLayout";
import { Login } from "../pages";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

export const LoginRoute = {
  path: "/",
  element: <LoginLayout />,
  children: [
    {
      index: true,
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "user-profile",
      element: <Profile />,
    },
    { path: "admindashboard", element: <AdminDashboard /> },
  ],
};
