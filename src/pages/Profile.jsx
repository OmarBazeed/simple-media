import { Box, Text, Image, Skeleton } from "@chakra-ui/react";
import BackImage from "../assets/background.jpg";
import profile from "../assets/user.jpg";
import { useAtomValue } from "jotai";
import { user } from "../store/UserStore";

const Profile = () => {
  const userData = useAtomValue(user);

  return (
    <>
      {userData ? (
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
              {userData?.name ? (
                <Text className="text-purple-500"> {userData?.name}</Text>
              ) : (
                <Skeleton>
                  <div>It Will Not be visible</div>
                </Skeleton>
              )}
            </Text>
            <Text className="text-xl text-gray-900 font-bold">
              Email:
              {userData?.email ? (
                <Text className="text-purple-500"> {userData?.email} </Text>
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
