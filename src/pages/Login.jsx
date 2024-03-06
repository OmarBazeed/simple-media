import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ExternalLinkIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import Swal from "sweetalert2";
import { mainApiURL } from "../utils";

const Login = () => {
  const toast = useToast();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleHomeBtn = () => {
    navigate("/");
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${mainApiURL}auth/login`, {
        email: userName,
        password: password,
      });

      const user = res.data.user;
      const token = res.data.access_token.slice(1, -1);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      toast({
        title: "Account Signed In",
        description: "You Have been signed in",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };
  return (
    <div className="h-screen duration-300 ">
      <section
        className={`shadow-lg m-auto hover:text-red-100 transition-all duration-500 loginModule`}
      >
        <Card align="center">
          <CardHeader>
            <Heading size="md"> Login </Heading>
          </CardHeader>
          <CardBody>
            <Input
              className="my-1"
              variant="flushed"
              placeholder="Enter Your Email"
              onChange={(e) => setUsername(e.target.value)}
              value={userName}
            />
            <Input
              type="password"
              className="my-1"
              variant="flushed"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </CardBody>
          <CardFooter className="flex flex-col">
            <Button colorScheme="blue" onClick={() => handleSubmit()}>
              Login
            </Button>
            <Link to="https://chakra-ui.com" isExternal className="my-3">
              <Text>
                forget your password ? <ExternalLinkIcon mx="2px" />
              </Text>
            </Link>
          </CardFooter>
        </Card>
      </section>
      <Button
        rightIcon={<ArrowForwardIcon />}
        colorScheme="teal"
        variant="outline"
        className="bckHome p-0 rounded-lg"
        onClick={handleHomeBtn}
      ></Button>
    </div>
  );
};

export default Login;
