import { Link } from "react-router-dom";
import { Stack, Button } from "@chakra-ui/react";
import { useEffect } from "react";
// import { axios } from "axios";

const SuggestedItems = () => {
  // const FetchingSuggItems = () => {
  //   axios("../common/SuggestedItems.json").then((res) => {
  //     console.log(res);
  //   });
  // };

  useEffect(() => {
    // FetchingSuggItems();
  });
  return (
    <div className="flex items-center justify-between my-2">
      <Stack direction="row" spacing={4} align="center" className="m-auto">
        <Link to="">
          <Button colorScheme="teal" variant="solid">
            Football
          </Button>
        </Link>
        <Link to="">
          <Button colorScheme="cyan" variant="solid">
            Economy
          </Button>
        </Link>
        <Link to="">
          <Button colorScheme="purple" variant="solid">
            Comeic
          </Button>
        </Link>
        <Link to="">
          <Button colorScheme="twitter" variant="solid">
            Policy
          </Button>
        </Link>
      </Stack>
    </div>
  );
};

export default SuggestedItems;
