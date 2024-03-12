import LoginLayout from "../components/login/LoginLayout";
import { Login } from "../pages";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

export const LoginRoute = {
  path: "auth",
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
  ],
};
