import { useEffect, useState } from "react";
import { mainApiURL } from "../utils";
import axios from "axios";
import { Box, Text, Image, Skeleton } from "@chakra-ui/react";
import BackImage from "../assets/background.jpg";
import profile from "../assets/user.jpg";
import Swal from "sweetalert2";

const Profile = () => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({});
  useEffect(() => {
    let fetchingUserData = async () => {
      try {
        let res = await axios.get(`${mainApiURL}auth/user-profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data.data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    };
    fetchingUserData();
  }, [token]);

  return (
    <>
      {user ? (
        <Box className="text-center mx-auto">
          <Image
            src={BackImage}
            alt="..."
            objectFit="cover"
            className="h-screen w-screen opacity-[30%] fixed top-0 left-0 z-[-1]"
          />
          <Box className="data flex items-center flex-col gap-3 mt-7">
            <Image src={profile} alt="..." className="rounded-full size-48" />
            <Text className="text-xl text-gray-900 font-bold">
              Name :
              {user?.name ? (
                <Text className="text-purple-500"> {user?.name}</Text>
              ) : (
                <Skeleton>
                  <div>It Will Not be visible</div>
                </Skeleton>
              )}
            </Text>
            <Text className="text-xl text-gray-900 font-bold">
              Email:
              {user?.email ? (
                <Text className="text-purple-500"> {user?.email} </Text>
              ) : (
                <Skeleton>
                  <div>It Will Not be visible</div>
                </Skeleton>
              )}
            </Text>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default Profile;
