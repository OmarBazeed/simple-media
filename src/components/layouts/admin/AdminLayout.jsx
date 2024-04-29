import { Outlet } from "react-router-dom";
import Navbar from "../../../common/Navbar";
import SideBar from "../../../common/SideBar";
import { Footer } from "antd/es/layout/layout";

const AdminLayout = () => {
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

export default AdminLayout;
