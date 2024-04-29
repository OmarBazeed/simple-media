import { Home, Posts } from "../pages/index.js";
import RootLayout from "../components/layouts/root/RootLayout.jsx";

export const RootRoute = {
  path: "/home",
  element: <RootLayout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "posts",
      element: <Posts />,
    },
  ],
};
