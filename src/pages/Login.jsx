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
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast, Box } from "@chakra-ui/react";

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const handleHomeBtn = () => {
    navigate("/");
  };

  const UserName = useRef();
  const Password = useRef();

  const handleSubmit = (username, password) => {
    axios
      .post("https://posts-api.preview-ym.com/api/auth/login", {
        email: username,
        password: password,
      })
      .then((res) => {
        const { user } = res.data;
        const { access_token } = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", JSON.stringify(access_token));
        {
          res &&
            toast({
              position: "bottom-left",
              render: () => (
                <Box color="white" p={3} bg="blue.500">
                  You Logged in Successfully
                </Box>
              ),
            });
        }
      })
      .catch((err) => console.log(err));
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
              ref={UserName}
            />
            <Input
              type="password"
              className="my-1"
              variant="flushed"
              placeholder="Enter Your Passscode"
              ref={Password}
            />
          </CardBody>
          <CardFooter className="flex flex-col">
            <Button
              colorScheme="blue"
              onClick={() =>
                handleSubmit(UserName.current.value, Password.current.value)
              }
            >
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
