import {
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Select,
  Box,
  Button,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { user, userToken } from "../store/UserStore";
import { useAtomValue } from "jotai";
import { mainApiURL } from "../utils";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const UserInfo = () => {
  const currentUser = useAtomValue(user);
  const token = useAtomValue(userToken);
  const toast = useToast();
  const { isOpen, onClose } = useDisclosure();

  const [updatedName, setUpdatedName] = useState(currentUser?.name);
  const [updatedEmail, setUpdatedEmail] = useState(currentUser?.email);

  const handleUpdate = async () => {
    try {
      let res = await axios.post(
        `${mainApiURL}user/upadteAccount`,
        {
          name: updatedName,
          email: updatedEmail,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast({
        description: res.data.message,
        status: "warning",
        duration: 1000,
        isClosable: true,
        position: "top-center",
        variant: "left-accent",
      });
      onClose();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };

  return (
    <>
      <ModalBody pb={6} isOpen={isOpen} onClose={onClose}>
        <FormControl>
          <FormLabel> First Name </FormLabel>
          <Input
            placeholder="First name"
            defaultValue={currentUser?.name}
            required
            onChange={(e) => setUpdatedName(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Email"
            defaultValue={currentUser?.email}
            required
            onChange={(e) => setUpdatedEmail(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Status</FormLabel>
          <Select placeholder="Select Status">
            <option value="Enable">Enable</option>
            <option value="Disable">Disable</option>
          </Select>
        </FormControl>
        <Box className="flex gap-3">
          <Button onClick={() => handleUpdate()}>Update </Button>
          <Button>Cancle </Button>
        </Box>
      </ModalBody>
    </>
  );
};

export default UserInfo;
