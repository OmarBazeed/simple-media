import Posts from "./Posts";
import SearchBar from "../components/SearchBar";
import { Box } from "@chakra-ui/react";
import AddPostModal from "../common/AddPostModal";
import { user } from "../store/UserStore";
import { useAtomValue } from "jotai";
const Home = () => {
  const currentUser = useAtomValue(user);

  return (
    <>
      <Box className="flex items-center justify-between">
        <Box className="w-full me-2">
          <SearchBar />
        </Box>
        {currentUser ? <AddPostModal /> : ""}
      </Box>
      <Posts />
    </>
  );
};

export default Home;
