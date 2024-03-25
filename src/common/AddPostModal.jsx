import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Input,
  FormLabel,
  useDisclosure,
  useToast,
  Box,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import Swal from "sweetalert2";
import { mainApiURL } from "../utils";
import axios from "axios";
import { userToken } from "../store/UserStore";
import { useAtomValue } from "jotai";

const AddPostModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [images, setImages] = useState([]);
  const [caption, setCaption] = useState("");
  const toast = useToast();
  const token = useAtomValue(userToken);

  const AddingNewPost = async () => {
    try {
      await axios.post(
        `${mainApiURL}post/create`,
        {
          content: caption,
          image: images,
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
        caption={caption}
        isOpen={isOpen}
        onClose={onClose}
        className="modalSection"
      >
        <ModalOverlay />
        <ModalContent className="p-3">
          <ModalHeader>Create your Post</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Upload Images</FormLabel>
              <Input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => {
                  setImages([...e.target.files]);
                  console.log([...e.target.files]);
                }}
                className="PicsInput"
              />
            </FormControl>
          </ModalBody>
          <Box className="flex gap-3 ">
            {images.length > 0
              ? images.map((img) => {
                  return (
                    <Box className="flex flex-col m-auto" key={img.name}>
                      <Image
                        src={URL.createObjectURL(img)}
                        alt="..."
                        className="w-45 h-20 rounded-md"
                      />
                      <FormControl>
                        <Input
                          placeholder="Caption"
                          onChange={(e) => {
                            setCaption(e.target.value);
                          }}
                        />
                      </FormControl>
                    </Box>
                  );
                })
              : console.log("first")}
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddPostModal;
