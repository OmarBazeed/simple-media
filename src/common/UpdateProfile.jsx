import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { mainApiURL } from "../utils";

const UpdateProfile = () => {
  const token = localStorage.getItem("token");
  let fetchingUsreInfo = async () => {
    try {
      let res = await axios.get(
        `${mainApiURL}auth/user-profile`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      onClose();
    } catch (error) {
      alert(error.response.data.message);
      onClose();
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Text onClick={onOpen} variant="" className=" w-full m-0 items-start">
        Udate
      </Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Your Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel> First Name </FormLabel>
              <Input placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Status</FormLabel>
              <Select placeholder="Select Status">
                <option value="Enable">Enable</option>
                <option value="Disable">Disable</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => fetchingUsreInfo()}
            >
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateProfile;
