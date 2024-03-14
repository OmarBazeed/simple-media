import { Button, Image, Spinner } from "@chakra-ui/react";
import Logo from "../../assets/logo.png";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  AvatarBadge,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  useToast,
} from "@chakra-ui/react";
import { RepeatIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { SearchBar } from "../";
import { mainApiURL } from "../../utils";
import Swal from "sweetalert2";
import UpdateProfile from "../../common/UpdateProfile";

const Navbar = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const user = JSON.parse(localStorage.getItem("user"));
  const [isClicked, setIsClicked] = useState(false);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        `${mainApiURL}auth/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast({
        description: "You Have signed out",
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top-right",
        variant: "left-accent",
      });
      setIsClicked(true);

      setTimeout(() => {
        localStorage.clear();
        sessionStorage.clear();
        navigate("/auth");
      }, 1000);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };
  return (
    <React.Fragment>
      <nav className="flex items-center justify-between h-[64px] bg-slate-600 w-full px-5 ">
        <div className=" w-full px-3 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <Image src={Logo} alt="..." className="size-11" />
            <h1 className="text-3xl font-bold text-white">Simple Media</h1>
          </div>
          <SearchBar />
          <div className="flex gap-2 items-center justify-between">
            {user ? (
              <>
                <Menu>
                  <MenuButton
                    as={Button}
                    colorScheme=""
                    className="rounded-2xl"
                  >
                    <Avatar
                      name={user?.name}
                      style={{ backgroundColor: "#C95D1C", color: "white" }}
                      className="h-full w-full hover:bg-slate-900"
                    >
                      <AvatarBadge boxSize=".85em" bg="green.500" />
                    </Avatar>
                  </MenuButton>
                  <MenuList>
                    <MenuGroup title="Profile" className="flex flex-col">
                      <MenuItem>
                        <Link to="/auth/user-profile">
                          <InfoOutlineIcon className="me-3" color="blue.500" />
                          My Account
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <RepeatIcon className="me-3" color="green.500" />
                        <UpdateProfile />
                      </MenuItem>
                    </MenuGroup>
                  </MenuList>
                </Menu>

                <Button colorScheme="orange" onClick={() => handleLogout()}>
                  {isClicked ? (
                    <Spinner
                      thickness="1px"
                      speed="0.5s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="md"
                    />
                  ) : (
                    "Logout"
                  )}
                </Button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
