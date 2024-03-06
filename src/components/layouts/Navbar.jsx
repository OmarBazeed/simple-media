import { Button, Image } from "@chakra-ui/react";
import Logo from "../../assets/logo.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AvatarBadge, Avatar } from "@chakra-ui/react";
import { SearchBar } from "../";
import { mainApiURL } from "../../utils";

const Navbar = () => {
  const navigate = useNavigate();
  // const toast = useToast();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        `${mainApiURL}auth/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("first");
      console.log(res);
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <nav className="flex items-center justify-between h-[64px] bg-slate-600 w-full ">
        <div className=" w-full px-3 flex items-center justify-between">
          <div className="flex gap-2">
            <Image src={Logo} alt="..." className="size-8" />
            <h1 className="text-3xl font-bold text-white">Simple Media</h1>
          </div>
          <SearchBar />
          <div className="flex gap-2">
            {user ? (
              <React.Fragment>
                <Avatar name="omar bazeed">
                  <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <Button colorScheme="orange" onClick={() => handleLogout()}>
                  Logout
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Button colorScheme="orange" onClick={() => navigate("/auth")}>
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
