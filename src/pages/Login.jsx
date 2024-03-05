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
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { mainApiURL } from "../utils";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const toast = useToast();
  const navigate = useNavigate();
  const handleHomeBtn = () => {
    navigate("/");
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${mainApiURL}auth/login`, {
        email: username,
        password: password,
      });
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res.data?.user));
      localStorage.setItem("token", res.data?.access_token);
      toast({
        title: "Login Successfully ",
        description: "logged in",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
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
              placeholder="Enter Your UserName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              className="my-1"
              variant="flushed"
              placeholder="Enter Your Passscode"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </CardBody>
          <CardFooter className="flex flex-col">
            <Button colorScheme="blue" onClick={() => handleSubmit()}>
              Go
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
