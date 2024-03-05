import { Navbar, Footer } from "../index.js";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
