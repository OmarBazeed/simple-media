import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootRoute } from "./routes/RootRoute.jsx";
import { PostsRoute } from "./routes/PostsRoute.jsx";

import { LoginRoute } from "./routes/LoginRoute";

const router = createBrowserRouter([RootRoute, LoginRoute, PostsRoute]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
