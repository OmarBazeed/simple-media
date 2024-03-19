import {
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { user } from "../store/UserStore";
import { useAtomValue } from "jotai";

const UserInfo = () => {
  const currentUser = useAtomValue(user);

  return (
    <>
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
            defaultValue={currentUser?.email}
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
    </>
  );
};

export default UserInfo;
