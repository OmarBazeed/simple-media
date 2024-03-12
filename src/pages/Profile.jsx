import { useCallback, useEffect, useState } from "react";
import { mainApiURL } from "../utils";
import axios from "axios";
import { Box, Text } from "@chakra-ui/react";
const Profile = () => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({});
  const FetchingUserData = useCallback(async () => {
    try {
      let res = await axios.get(
        `${mainApiURL}auth/user-profile`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      console.log(res);
      setUser(res.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }, [token]);

  useEffect(() => {
    FetchingUserData();
  }, [FetchingUserData]);

  return (
    <>
      <Box className="w-full mx-auto text-center text-red-950 text-xl bg-slate-400">
        <Text>
          {user?.name}
          User Profile Info.
        </Text>
      </Box>
    </>
  );
};

export default Profile;
