import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div className="container-fluid ">
      <Outlet />
    </div>
  );
};

export default LoginLayout;
