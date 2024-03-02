import { Input, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  return (
    <>
      <div className="flex">
        <Input placeholder="Search" />
        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          icon={<SearchIcon />}
          style={{ position: "absolute" }}
          className="right-0"
        />
      </div>
    </>
  );
};

export default SearchBar;
