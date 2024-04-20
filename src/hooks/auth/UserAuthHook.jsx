import axios from "axios";
import { mainApiURL } from "../../utils";
import { useToast } from "@chakra-ui/react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const UserLogin = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const handleSubmit = async (data, user, token, clicked) => {
    try {
      await axios
        .post(`${mainApiURL}auth/login`, {
          email: data.userName,
          password: data.password,
        })
        .then((res) => {
          user(res.data.user);
          token(res.data.access_token);
        });

      toast({
        description: "You Have been signed in",
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top-right",
        variant: "left-accent",
      });
      clicked(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };
  return { handleSubmit };
};
