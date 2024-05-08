import { InfoOutlineIcon, RepeatIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useAtomValue } from "jotai";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { SearchBar } from "../components";
import UpdateProfile from "./UpdateProfile";
import { user, userToken } from "../store/UserStore";
import { mainApiURL } from "../utils";

const Navbar = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const userData = useAtomValue(user);
  const [isClicked, setIsClicked] = useState(false);
  const token = useAtomValue(userToken);

  const handleLogout = async () => {
    try {
      await axios.post(
        `${mainApiURL}user/logout`,
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
        navigate("/");
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
            <h1 className="text-3xl font-bold text-white">Simple Media</h1>
          </div>
          <SearchBar />
          <div className="flex gap-2 items-center justify-between">
            {Object.keys(userData).length != 0 ? (
              <>
                <Menu>
                  <MenuButton
                    as={Button}
                    colorScheme=""
                    className="rounded-2xl"
                  >
                    <Avatar
                      name={userData?.name}
                      style={{ backgroundColor: "#C95D1C", color: "white" }}
                      className="h-full w-full hover:bg-slate-900"
                    >
                      <AvatarBadge boxSize=".85em" bg="green.500" />
                    </Avatar>
                  </MenuButton>
                  <MenuList>
                    <MenuGroup title="Profile" className="flex flex-col">
                      <MenuItem>
                        <Link to="/user-profile">
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
