import { Home } from "../pages";
import { RootLayout } from "../components";

export const RootRoute = {
    path: "/",
    element: <RootLayout />,
    errorElement: null,
    children: [
        {
            index: true,
            element: <Home />,
        },
    ],
};
