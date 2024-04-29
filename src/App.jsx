import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootRoute } from "./routes/RootRoute";
import { LoginRoute } from "./routes/LoginRoute";
import { AdminRoute } from "./routes/AdminRoute";

const router = createBrowserRouter([RootRoute, LoginRoute, AdminRoute]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
