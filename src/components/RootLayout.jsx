import { Navbar, Footer, SideBar } from "./index.js";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <div className="flex items-start gap-2 pe-2 ">
        <div className="bg-[#062634] h-screen text-lg basis-36">
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
