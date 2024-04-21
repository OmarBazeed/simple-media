import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import axios from "axios";
import { mainApiURL } from "../utils";
import MultiSelect from "./MultiSelect";
import Swal from "sweetalert2";
import { useAtomValue } from "jotai";
import { userToken } from "../store/UserStore";
import UserInfo from "./UserInfo";

const UpdateProfile = () => {
  const token = useAtomValue(userToken);
  // const [, setcurrentUser] = useAtom(user);

  let fetchingUsreInfo = async () => {
    try {
      await axios.get(`${mainApiURL}auth/user-profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // setcurrentUser(res.data.data);
      onOpen();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "opps",
        text: error.response.data.message,
      });
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
          <ModalHeader className="text-center text-purple-900  shadow-md mb-3">
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
                <UserInfo />
              </TabPanel>
              <TabPanel>
                <MultiSelect />
              </TabPanel>
              <TabPanel>
                <p>Pictures!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateProfile;
