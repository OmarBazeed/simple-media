import { Navbar, Footer, SideBar } from "./index.js";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <div className="flex items-start gap-2 pe-2 ">
        <div className="w-60 bg-[#3A724F] h-screen text-lg">
          <SideBar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RootLayout;
