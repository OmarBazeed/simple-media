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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import axios from "axios";
import { mainApiURL } from "../utils";
import { useState } from "react";
import MultiSelect from "./MultiSelect";

const UpdateProfile = () => {
  const token = localStorage.getItem("token");
  const [currentUser, setcurrentUser] = useState({});

  let fetchingUsreInfo = async () => {
    try {
      let res = await axios.get(`${mainApiURL}auth/user-profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setcurrentUser(res.data.data);
      onOpen();
    } catch (error) {
      alert(error.response.data.message);
      onClose();
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Text
        onClick={() => fetchingUsreInfo()}
        variant=""
        className=" w-full m-0 items-start"
      >
        Udate
      </Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="text-center text-purple-950  shadow-md mb-3">
            Update Your Profile
          </ModalHeader>
          <ModalCloseButton />
          <Tabs variant="enclosed" className="">
            <TabList>
              <Tab>Data</Tab>
              <Tab>Skills</Tab>
              <Tab>Pics</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel> First Name </FormLabel>
                    <Input
                      placeholder="First name"
                      defaultValue={currentUser?.name}
                      required
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      placeholder="Email"
                      defaultValue={currentUser.email}
                      required
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Status</FormLabel>
                    <Select placeholder="Select Status">
                      <option value="Enable">Enable</option>
                      <option value="Disable">Disable</option>
                    </Select>
                  </FormControl>
                </ModalBody>
              </TabPanel>
              <TabPanel>
                <MultiSelect />
              </TabPanel>
              <TabPanel>
                <p>Pictures!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Send
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateProfile;
