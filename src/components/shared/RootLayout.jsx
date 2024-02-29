import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <>
            <h1>Navbar</h1>
            <Outlet />
            <h1>Footer</h1>
        </>
    );
};

export default RootLayout;
