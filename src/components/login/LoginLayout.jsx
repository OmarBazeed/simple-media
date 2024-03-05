import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};

export default LoginLayout;
