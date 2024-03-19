import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Input,
  FormLabel,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import Swal from "sweetalert2";
import { mainApiURL } from "../utils";
import axios from "axios";
import { userToken } from "../store/UserStore";
import { useAtomValue } from "jotai";

const AddPostModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [description, setDescription] = useState("");
  const toast = useToast();
  const token = useAtomValue(userToken);

  const AddingNewPost = async () => {
    try {
      await axios.post(
        `${mainApiURL}post/create`,
        {
          content: caption,
          image: image,
          description: description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      onClose();
      // window.location.reload();
      toast({
        title: "New Post Created",
        status: "warning",
        isClosable: true,
        position: "top",
        variant: "left-accent",
        duration: 1000,
      });
    } catch (error) {
      onClose();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };
  return (
    <>
      <Button onClick={onOpen} variant="outline" colorScheme="orange">
        + Add Post
      </Button>

      <Modal
        image={image}
        caption={caption}
        description={description}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your Post</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Upload Images</FormLabel>
              <Input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => setImage(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Caption</FormLabel>
              <Input
                placeholder="Enter A Caption"
                onChange={(e) => setCaption(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="Enter A Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => AddingNewPost()}>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddPostModal;
