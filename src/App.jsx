import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootRoute } from "./routes/RootRoute";

const router = createBrowserRouter([RootRoute]);

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
