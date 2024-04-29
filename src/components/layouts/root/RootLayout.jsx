import { Navbar, Footer, SideBar } from "../../index.js";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <div className="flex items-start gap-2 pe-2 ">
        <div className="text-lg">
          <SideBar />
        </div>
        <div className="w-100">
          <Outlet />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RootLayout;
