import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import { SideBarLinks } from "../utils";
import Logo from "../assets/logoipsum-226.svg";
import { Button, Image } from "@chakra-ui/react";
import { useState } from "react";

const SideBar = () => {
  const [isCollabsed, setIsCollabsed] = useState(false);
  return (
    <Sidebar collapsed={isCollabsed}>
      <div className="bg-slate-600 h-screen ">
        <Button
          onClick={() => setIsCollabsed(!isCollabsed)}
          colorScheme=""
          className="my-3 w-full"
        >
          <Image src={Logo} className="size-11" alt="..." />
        </Button>

        <Menu>
          {SideBarLinks.map((ele) => {
            return (
              <MenuItem
                component={<NavLink to={ele.path} />}
                icon={ele.icon}
                key={ele.id}
                className="text-white font-bold hover:text-black"
              >
                {ele.name}
              </MenuItem>
            );
          })}
        </Menu>
      </div>
    </Sidebar>
  );
};

export default SideBar;
