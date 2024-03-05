import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <>
      <section className="flex items-center justify-around bg-slate-900 py-2">
        <h1 className="font-mono text-white text-2xl">FaceTook</h1>

        <ul>
          <li className="mx-1 inline-block">
            <Link to="/" className="">
              <Button colorScheme="cyan" variant="ghost">
                Home
              </Button>
            </Link>
          </li>
          <li className="mx-1 inline-block">
            <Link to="/posts" className="">
              <Button colorScheme="cyan" variant="ghost">
                Posts
              </Button>
            </Link>
          </li>
          <li className="mx-1 inline-block">
            <Link to="/login" className="">
              <Button colorScheme="messenger" variant="ghost">
                Login
              </Button>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Navbar;
