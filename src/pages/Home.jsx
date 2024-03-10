import Posts from "./Posts";
import SearchBar from "../components/SearchBar";
import { Box, Button } from "@chakra-ui/react";

const Home = () => {
  const currentUser = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Box className="flex items-center justify-between">
        <Box className="w-full me-2">
          <SearchBar />
        </Box>
        {currentUser ? (
          <Button colorScheme="" variant="outline">
            + Add Post
          </Button>
        ) : (
          ""
        )}
      </Box>
      <Posts />
    </>
  );
};

export default Home;
