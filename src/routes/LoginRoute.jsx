import LoginLayout from "../components/login/LoginLayout";
import { Login } from "../pages";

export const LoginRoute = {
  path: "/login",
  element: <LoginLayout />,
  children: [
    {
      index: true,
      element: <Login />,
    },
  ],
};
