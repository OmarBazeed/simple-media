import {
  Card,
  CardBody,
  Stack,
  Text,
  Image,
  Divider,
  Button,
  Heading,
  Box,
  CardFooter,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import axios from "axios";
import { mainApiURL } from "../utils/index";
import { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import Image1 from "../assets/1.jpg";
import UserDemo from "../assets/user.jpg";
import moment from "moment";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const fetchingPosts = useCallback(async () => {
    try {
      let res = await axios.get(`${mainApiURL}post/showAll`);
      setPosts(res.data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }, []);

  useEffect(() => {
    fetchingPosts();
  }, [fetchingPosts]);
  return (
    <div className="my-4 flex flex-wrap items-center justify-between ">
      {posts?.map((post) => {
        console.log(post);
        return (
          <div key={post.id} className="w-full">
            <Card
              maxW="3xl"
              className="shadow-2xl m-auto shadow-blue-500/50 hover:shadow-slate-950  hover:shadow-md   transition-all duration-500 p-2 my-3"
            >
              <Box className="flex items-center gap-3 justify-between mb-2">
                <Stack className="flex  gap-3" style={{ flexDirection: "row" }}>
                  <Image
                    src={
                      currentUser?.profile_img
                        ? currentUser.profile_img
                        : UserDemo
                    }
                    alt="..."
                    className="rounded-full size-8 mb-2 "
                  />
                  <Text as="b" className="capitalize">
                    {post.user.name}
                  </Text>
                </Stack>
                <Stack>
                  {post?.user_id == currentUser?.id ? (
                    <Button colorScheme="teal" variant="ghost">
                      <EditIcon className="me-2" />
                      Edit
                    </Button>
                  ) : (
                    ""
                  )}
                </Stack>
              </Box>
              <Divider />
              <CardBody>
                <Image
                  src={post?.image ? post.image : Image1}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  className="w-full"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{post.content}</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Text>
                </Stack>
              </CardBody>

              <CardFooter className="mt-[-20px]">
                <Text className="text-gray-400">
                  {moment(post?.created_at, "YYYYMMDD").fromNow()}
                </Text>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
