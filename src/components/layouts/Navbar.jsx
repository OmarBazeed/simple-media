import { Button, Image } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import React from "react";
import { NavbarLinks, mainApiURL } from "../../utils";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const Navbar = () => {
  const token = localStorage.getItem("token")?.slice(1, -1);
  const navigate = useNavigate();
  const toast = useToast();
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogout = async () => {
    try {
      const res = await axios.post(
        `${mainApiURL}auth/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.clear();
      sessionStorage.clear();
      toast({
        title: "Logout Successfully ",
        description: res.data.message,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/auth");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <nav className="flex items-center justify-between h-[64px] bg-slate-700 w-full ">
        <div className=" w-full px-3 flex items-center justify-between">
          <div className="flex gap-2">
            <Image src={Logo} alt="..." className="size-8" />
            <h1 className="text-3xl font-bold text-white">Simple Media</h1>
          </div>
          <div className="flex gap-1">
            {NavbarLinks.map((link) => {
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`hover:bg-orange-500 p-2 rounded-md `}
                >
                  <h3 className="text-white">{link.name}</h3>
                </Link>
              );
            })}
          </div>
          <div className="flex gap-2">
            {user?.id ? (
              <React.Fragment>
                <Button colorScheme="orange" onClick={() => handleLogout()}>
                  Logout
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Button colorScheme="orange" onClick={() => navigate("/auth")}>
                  {" "}
                  Login
                </Button>
                <Button
                  colorScheme="orange"
                  variant="outline"
                  onClick={() => navigate("/auth/register")}
                >
                  Register
                </Button>
              </React.Fragment>
            )}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
