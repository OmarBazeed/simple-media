import { Input, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  return (
    <>
      <section className="flex relative my-4">
        <Input placeholder="Search" />
        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          icon={<SearchIcon />}
          style={{ position: "absolute" }}
          className="right-0"
        />
      </section>
    </>
  );
};

export default SearchBar;
