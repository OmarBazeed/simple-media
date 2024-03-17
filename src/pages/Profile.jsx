import { useState } from "react";
import { mainApiURL } from "../utils";
import axios from "axios";
import { Box, Text, Image } from "@chakra-ui/react";
import BackImage from "../assets/background.jpg";
import profile from "../assets/user.jpg";
const Profile = () => {
  const token = localStorage.getItem("token").slice(1, -1);

  const [user, setUser] = useState({});

  const FetchingUserData = async () => {
    try {
      let res = await axios.get(`${mainApiURL}auth/user-profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      console.log(res);
      setUser(res.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  FetchingUserData();

  return (
    <>
      {user?.name}
      <Box className="text-center mx-auto">
        <Image
          src={BackImage}
          alt="..."
          objectFit="cover"
          className="h-screen w-screen opacity-50 fixed top-0 left-0 z-[-1]"
        />
        <Box className="data flex items-center flex-col gap-3 mt-7">
          <Image src={profile} alt="..." className="rounded-full size-56" />
          <Text className="text-xl text-gray-900 font-bold">
            Name : {user?.name ? user?.name : "Omar Bazeed"}
          </Text>
          <Text className="text-xl text-gray-900 font-bold">
            Email: {user?.email ? user?.email : "omarbazeed@gmail.com"}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
