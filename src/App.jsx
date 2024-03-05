import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootRoute } from "./routes/RootRoute.jsx";

import { LoginRoute } from "./routes/LoginRoute";

const router = createBrowserRouter([RootRoute, LoginRoute, ]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
