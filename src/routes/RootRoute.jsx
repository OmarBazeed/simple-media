import { Home, Posts } from "../pages/index.js";
import RootLayout from "../components/RootLayout.jsx";

export const RootRoute = {
  path: "/",
  element: <RootLayout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      index: "posts",
      element: <Posts />,
    },
  ],
};
