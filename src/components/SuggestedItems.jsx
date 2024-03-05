import { Link } from "react-router-dom";
import { Stack, Button } from "@chakra-ui/react";
import { SuggestItems } from "../utils/index";

const SuggestedItems = () => {
  return (
    <div className="flex items-center justify-between my-2">
      <Stack direction="row" spacing={4} align="center" className="m-auto">
        {SuggestItems.map((item) => (
          <Link to="" key={item.name}>
            <Button colorScheme={item.color} variant="solid">
              {item.icon}
              {item.name}
            </Button>
          </Link>
        ))}
      </Stack>
    </div>
  );
};

export default SuggestedItems;
