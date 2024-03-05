import Navbar from "../layouts/Navbar";
import { Outlet } from "react-router-dom";

const PostsLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PostsLayout;
