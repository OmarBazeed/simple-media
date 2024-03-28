import axios from "axios";
import { mainApiURL } from "../../utils";
import Swal from "sweetalert2";
import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";

export const GetPostsHook = (createPostsArr) => {
  const fetchingPosts = useCallback(async () => {
    try {
      const res = await axios.get(`${mainApiURL}post/showAll`);
      createPostsArr(res.data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }, []);
  return { fetchingPosts };
};

export const DeletePostHook = (fetchPosts) => {
  const toast = useToast();
  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`${mainApiURL}post/delete/${postId}`);
      toast({
        title: "Post deleted successfully",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
        variant: "top-accent",
      });
      fetchPosts();
    } catch (error) {
      alert(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };
  return { handleDeletePost };
};
