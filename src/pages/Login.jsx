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
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import {
  useToast,
  InputGroup,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import Swal from "sweetalert2";
import { mainApiURL } from "../utils";
import { useAtom } from "jotai";
import { user, userToken } from "../store/UserStore";

const Login = () => {
  const toast = useToast();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const [, setToken] = useAtom(userToken);
  const [, setUserData] = useAtom(user);

  const handleSubmit = async () => {
    try {
      await axios
        .post(`${mainApiURL}auth/login`, {
          email: userName,
          password: password,
        })
        .then((res) => {
          setUserData(res.data.user);
          setToken(res.data.access_token);
        });

      toast({
        description: "You Have been signed in",
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top-right",
        variant: "left-accent",
      });
      setIsClicked(true);
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

  const PasswordInput = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
      <InputGroup size="lg">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="my-1"
          variant="flushed"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    );
  };
  return (
    <div className="h-screen duration-300">
      <section
        className={`shadow-lg m-auto hover:text-red-100 transition-all duration-500 loginModule`}
      >
        <Card align="center" className="w-[420px] h-[370px]">
          <CardHeader>
            <Heading size="lg" className="loginHead">
              Login
            </Heading>
          </CardHeader>
          <CardBody>
            <Input
              className="my-1"
              variant="flushed"
              placeholder="Enter Your Email"
              onChange={(e) => setUsername(e.target.value)}
              value={userName}
            />
            {PasswordInput()}
          </CardBody>
          <CardFooter className="flex flex-col">
            <Button colorScheme="blue" onClick={() => handleSubmit()}>
              {isClicked ? (
                <Spinner
                  thickness="1px"
                  speed="0.5s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="md"
                />
              ) : (
                "Login"
              )}
            </Button>
            <div className="flex gap-2 items-center mt-4">
              <Link to="https://chakra-ui.com" isExternal className="">
                <Text>forget your password ?</Text>
              </Link>
              <p className="">OR </p>
              <Button
                colorScheme="orange"
                variant="link"
                onClick={() => navigate("/auth/register")}
                className=""
                size="md"
              >
                Register
              </Button>
            </div>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
};

export default Login;
