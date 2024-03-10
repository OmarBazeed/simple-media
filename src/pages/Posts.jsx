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
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";
import { mainApiURL } from "../utils/index";
import { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import Image1 from "../assets/1.jpg";
import UserDemo from "../assets/user.jpg";
import moment from "moment";
import { useToast } from "@chakra-ui/react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const toast = useToast();

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

  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`${mainApiURL}post/delete/${postId}`);
      toast({
        title: "Account Signed In",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      alert(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };

  const handleEditPost = async (postId) => {
    try {
      await axios.delete(`${mainApiURL}post/update/${postId}`, {});
      toast({
        title: "Account Signed In",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      alert(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };
  return (
    <div className="my-4 flex flex-wrap items-center justify-between ">
      {posts?.map((post) => {
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
                    <>
                      <div className="flex gap-2">
                        <Button
                          colorScheme="teal"
                          variant="outline"
                          onClick={() => {
                            handleEditPost(post.id);
                          }}
                        >
                          <EditIcon className="me-2" />
                          Edit
                        </Button>
                        <Button
                          colorScheme="red"
                          variant="ghost"
                          onClick={() => {
                            handleDeletePost(post.id);
                          }}
                        >
                          <DeleteIcon />
                          Delete
                        </Button>
                      </div>
                    </>
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
