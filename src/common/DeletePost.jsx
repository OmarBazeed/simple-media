import { Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const DeletePostButton = () => {
  const deletePost = () => {
    console.log("first");
  };
  return (
    <>
      <Button
        colorScheme="red"
        variant="solid"
        onClick={() => {
          deletePost();
        }}
      >
        <DeleteIcon />
        Delete
      </Button>
    </>
  );
};

export default DeletePostButton;
