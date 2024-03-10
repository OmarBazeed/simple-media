import { Link } from "react-router-dom";
import { SideBarLinks } from "../../utils";

const SideBar = () => {
  return (
    <>
      <ul>
        {SideBarLinks.map((ele) => {
          return (
            <Link
              to={ele.path}
              key={ele.id}
              className="block font-bold font-mono text-[#DC8E43] px-4 my-4 hover:bg-slate-800 duration-75"
            >
              {ele.name}
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default SideBar;
