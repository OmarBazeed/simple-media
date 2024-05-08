import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Input,
  useToast,
  InputGroup,
  InputRightElement,
  Spinner,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";
import { mainApiURL } from "../utils";

const Register = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [celebrate, setCelebrate] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();

  const handleSubmit = (name, email, password, confirmPassword) => {
    axios
      .post(`${mainApiURL}user/register`, {
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
      })
      .then((res) => {
        toast({
          description: res.data.message,
          status: "success",
          duration: 1000,
          isClosable: true,
          position: "top-right",
          variant: "left-accent",
        });
        setCelebrate(true);
        setTimeout(() => {
          navigate("/");
        }, 2500);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      });
  };

  const PasswordInput = (pas, set, place) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    return (
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder={place}
          onChange={(e) => set(e.target.value)}
          value={pas}
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
    <div className="h-screen duration-300 overflow-hidden ">
      {celebrate && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <section
        className={`shadow-lg m-auto hover:text-red-100 transition-all duration-500 loginModule`}
      >
        <Card align="center">
          <CardHeader>
            <Heading size="lg" className="registerHead">
              Register
            </Heading>
          </CardHeader>
          <CardBody>
            <Input
              className="my-1 px-2"
              variant="flushed"
              placeholder="Enter Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              className="my-1 px-2"
              variant="flushed"
              placeholder="Enter Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {PasswordInput(password, setPassword, "Enter Your Password")}
            {PasswordInput(
              confirmPassword,
              setconfirmPassword,
              "Confirm Password"
            )}
          </CardBody>
          <CardFooter className="flex flex-col">
            <Button
              colorScheme="blue"
              onClick={() =>
                handleSubmit(name, email, password, confirmPassword)
              }
            >
              {celebrate == true ? (
                <Spinner
                  thickness="1px"
                  speed="0.5s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="md"
                />
              ) : (
                "Submit"
              )}
            </Button>
            <Link to="/" className=" capitalize mt-4">
              <Text color="blue"> you have an account ? </Text>
            </Link>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
};

export default Register;
